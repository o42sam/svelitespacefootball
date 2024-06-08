<script lang="ts">
	import { ProgressRadial } from "@skeletonlabs/skeleton";
	import Icon from "./Icon.svelte";
	import { slide, fade, scale, fly } from "svelte/transition";
	import { auth, sendVerificationToken, verifyEmail, create } from "../../api/users";
	import { largeScreen, mediumScreen, smallScreen } from "../../stores/media";
	import { chatMessages, addIncomingMessage, addSentMessage } from "../../stores/chat";
    import logo from "$lib/img/core/logo.png"

    export let chatButtonText: string = ""

	let chatButton = true
	let chatWindow = false
	let chatEnabled = false
	let createUserForm = false
	let isLoading = false
	let createUserFormSubmitted = false
	let error: any = ""
	let currentUser: any = null
	let emailVerificationToken = ""
	let currentMessageInput = ""

	let userData: any = {
        username: "",
        emailVisibility: false,
		firstName: "",
		lastName: "",
		email: "",
		password: "",
        passwordConfirm: "",
	}

	if (typeof window !== "undefined") {
		if (window.localStorage.getItem("validUser")) {
			chatEnabled = true
            currentUser = window.localStorage.getItem("validUser")
		}
	}

	function showChatWindow() {
		chatButton = false
		chatWindow = true
	}

	function hideChatWindow() {
		chatWindow = false
		chatButton = true
	}

    async function authUser() {
        if (userData.email !== "" && userData.password !== "") {
            error = ""
            isLoading = true;
            try {
                const user = await auth(userData);
                console.log(user);
                currentUser = user;
                
                chatEnabled = true;

                if (typeof window !== "undefined") {
                    window.localStorage.setItem("validUser", JSON.stringify(user));
                }
            } catch (err: any) {
                error = err.message === undefined ? "Couldn't authenticate user. Please ensure that your email and password are correct and that you have a stable connection" : err.message
                console.log(err);
            } finally {
                isLoading = false;
            }
        }
    }

	async function sendVerification() {
        if (userData.email !== "" && userData.password !== "") {
            error = ""
            const { email } = userData
            isLoading = true
            try {
                await sendVerificationToken(email)
            }
            catch(err: any) {
                error = err.message === undefined ? "Couldn't authenticate user. Please ensure that the email you entered is correct and that you have a stable connection" : err.message
                console.log(err)
            }
            finally {
                isLoading = false
                createUserFormSubmitted = true
            }
        }
	}

	async function createUser() {
		if (emailVerificationToken !== "") {
            error = ""
			const { email } = userData
            isLoading = true
			try {
                const res = await verifyEmail(email, emailVerificationToken)
                console.log("Token verification response", res)
                if (res.success) {
                    await create(userData)

                    createUserForm = false
                    createUserFormSubmitted = false
                } else {
                    throw new Error("The code you entered is incorrect")
                }
			}
			catch(err: any) {
				error = err
                error = err.message === undefined ? "Couldn't verify. Please ensure that the code you entered is correct and that you have a stable connection" : err.message
                console.log(err)
			}
			finally {
				isLoading = false
			}
		}
	}

    function displayMessage(message: any, sent = false) {
        const messageElement = document.createElement("div");

        if (message !== "") {
                messageElement.textContent = message;
            if (sent) {
                messageElement.setAttribute("style", "background-color: rgb(217, 249, 157); color: black; border-radius: 20px; padding: 10px; align-self: flex-end; max-width: 50%; margin-bottom: 5px;");
            } else {
                messageElement.setAttribute("style", "background-color: rgb(229, 229, 229); color: black; border-radius: 20px; padding: 10px; align-self: flex-start; max-width: 50%; margin-bottom: 5px;");
            }
        }
        
        const chatMessages = document.getElementById("chat-messages");
        chatMessages.appendChild(messageElement);
    }

    let chatMessagesNode: any
    
    function useChatMessages(node: any) {
        if (chatEnabled && chatWindow && !node.innerHTML) {
            chatMessagesNode = node;
            updateChatMessages();
        }

        return {
            update() {
                if (chatEnabled && chatWindow) {
                    chatMessagesNode = node;
                    updateChatMessages();
                }
            }
        };
    }

    function messagesMatch(storeMessages: any, nodeMessages: any) {
        if (storeMessages.length !== nodeMessages.length) {
            return false;
        }
        for (let i = 0; i < storeMessages.length; i++) {
            const { message, sent } = storeMessages[i];
            const nodeMessage = nodeMessages[i];
            if (nodeMessage.textContent !== message || 
                (sent && !nodeMessage.style.alignSelf.endsWith("flex-end")) ||
                (!sent && !nodeMessage.style.alignSelf.endsWith("flex-start"))) {
                return false;
            }
        }
        return true;
    }

    function updateChatMessages() {
        if (chatMessagesNode) {
            chatMessages.subscribe(messages => {
                const nodeMessages = Array.from(chatMessagesNode.children);
                if (!messagesMatch(messages, nodeMessages)) {
                    chatMessagesNode.innerHTML = '';
                    messages.forEach(({ message, sent }) => {
                        displayMessage(message, sent);
                    });
                }
            });
        }
    }
    
    let ws;
	let sendMessage = () => {
		console.log("Wrong function called")
	}

    function establishWebSocket() {
        if (typeof document !== "undefined") {
			
            let userId
            if (currentUser) {
                userId = currentUser.id;
            }
            else {
                return
            }
            
            ws = new WebSocket(`ws://localhost:42069/ws/visitor/${userId}/admin`);
            
            ws.onopen = function (event) {
                console.log("WebSocket connection established.");
            };
            
            ws.onmessage = function (event) {
                const message = event.data;
                addIncomingMessage(message);
            };
			
            sendMessage = () => {
                const message = currentMessageInput;
                addSentMessage(message);
                ws.send(message);
                currentMessageInput = "";
            }
            
        }
    }
	
    $: if (chatEnabled) {
		establishWebSocket();
    }
</script>

{#if $largeScreen}

<div class="fixed flex items-center justify-center right-10 bottom-6 z-30 w-1/6" id="chat-section">
    {#if chatButton}
        <button class=" btn flex space-x-4 bg-black text-lime-200 rounded-full min-w-72 items-center justify-center font-medium text-xl p-6" id="chat-button" on:click={showChatWindow}>
            <p class="text-wrap w-2/3">{chatButtonText}</p>
            <Icon name="bubble" size="{30}" color="rgb(217,249,157)" />
        </button>
    {/if}
    {#if chatWindow}
        <div in:slide out:slide class="absolute flex flex-col items-center justify-center bg-white border border-black p-6 rounded-xl bottom-full w-96 min-h-96">
            <div class="flex w-full relative items-center justify-center mb-2">
                <img class="h-7 self-center" src="{logo}" alt="logo" />
                <button class="absolute btn -top-4 -right-7 rounded-full" on:click={hideChatWindow}>
                    <Icon name="cross" size="{15}" color="black" />
                </button>
            </div>
            {#if chatEnabled}
                <div class="w-full h-full flex flex-col justify-between items-center">
                    <p class="text-center p-4">How can we help you today?</p>
                    <div id="chat-messages" class="w-full h-64 flex flex-col overflow-scroll hide-scrollbar" use:useChatMessages></div>
                    <div class="flex w-full items-center justify-center space-x-1 self-end min-h-10 p-1 bg-white">
                        <textarea id="message-input" class="input hide-scrollbar rounded-lg h-10" bind:value={currentMessageInput}></textarea>
                        <button id="send-button" class="btn rounded-lg variant-filled bg-black text-lime-200" on:click={sendMessage}>
                            <Icon name="send" size="{20}" color="rgb(217,249,157)" />
                        </button>
                    </div>
                </div>
            {:else}
                <div class="relative w-full h-full flex flex-col items-center justify-center">
                    <p class="text-xl font-medium my-4 mt-9">Give us a way to identify you</p>
                    {#if createUserForm}
                        {#if createUserFormSubmitted && !error}
                            <div class="flex flex-col space-y-4 items-center justify-center">
                                <p>We have sent a verification code to the email you provided. Please verify your email to use chat.</p>
                                <form on:submit={createUser} class="flex flex-col space-y-4 w-full">
                                    <input type="text" class="input w-full rounded-lg" placeholder="Enter verification code" bind:value={emailVerificationToken} />
                                    <button type="submit" class="btn variant-filled bg-black text-lime-200">Verify</button>
                                    {#if error}
                                    <p class="text-error-500 text-sm text-center">{error}</p>
                                    {/if}
                                </form>
                            </div>
                        {:else}
                            <form on:submit|preventDefault={sendVerification} id="create-user" class="flex flex-col justify-center space-y-4">
                                <label class="label">
                                    First Name
                                    <input required type="text" class="input rounded-lg" bind:value={userData.firstName} />
                                </label>
                                <label class="label">
                                    Last Name
                                    <input required type="text" class="input rounded-lg" bind:value={userData.lastName} />
                                </label>
                                <label class="label">
                                    Email
                                    <input required type="email" class="input rounded-lg" bind:value={userData.email} />
                                </label>
                                <label class="label">
                                    Password
                                    <input required type="password" class="input rounded-lg" bind:value={userData.password} on:change={() => userData.passwordConfirm = userData.password}/>
                                </label>
                                {#if error}
                                <p class="text-error-500 text-sm text-center">{error}</p>
                                {/if}
                                <button type="submit" class="btn variant-filled bg-black text-lime-200">Sign up</button>
                                <p>Already signed up? <button class="anchor" on:click={() => createUserForm = false}>Log in instead</button></p>
                            </form>
                        {/if}
                    {:else}
                        <form on:submit|preventDefault={authUser} id="auth-user" class="flex flex-col justify-center space-y-4">
                            <label class="label">
                                Email
                                <input required type="email" class="input rounded-lg" bind:value={userData.email} />
                            </label>
                            <label class="label">
                                Password
                                <input required type="password" class="input rounded-lg" bind:value={userData.password} />
                            </label>
                            <button type="submit" class="btn variant-filled bg-black text-lime-200">Sign in</button>
                            <p class="text-center">Not signed up yet? <button class="anchor" on:click={() => createUserForm = true}>Sign up now</button></p>
                        </form>
                    {/if}
                    {#if isLoading}
                        <div class="absolute w-full h-full flex items-center justify-center top-0 opacity-50 bg-white">
                            <ProgressRadial />
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    {/if}
</div>

{:else if $mediumScreen}

<div class="fixed flex items-center justify-center right-0 bottom-4 z-30 w-1/2 p-2" id="chat-section">
    {#if chatButton}
        <button class=" btn flex bg-black text-lime-200 rounded-full w-60 items-center text-xl space-x-2 font-medium justify-center py-4" id="chat-button" on:click={showChatWindow}>
            <p>Chat with us now</p>
            <Icon name="bubble" size="{25}" color="rgb(217,249,157)" />
        </button>
    {/if}
    {#if chatWindow}
        <div class="absolute flex flex-col items-center justify-center bg-white border border-black p-6 rounded-xl bottom-full -left-full w-screen min-h-96">
            <div class="flex w-full relative items-center justify-center mb-4">
                <img class="h-7 self-center" src="{logo}" alt="logo" />
                <button class="absolute btn -top-4 -right-7 rounded-full" on:click={hideChatWindow}>
                    <Icon name="cross" size="{15}" color="black" />
                </button>
            </div>
            {#if chatEnabled}
                <div class="w-full h-full flex flex-col justify-between items-center">
                    <p class="text-center p-4">How can we help you today?</p>
                    <div id="chat-messages" class="w-full h-64 flex flex-col overflow-scroll hide-scrollbar" use:useChatMessages></div>
                    <div class="flex w-full items-center justify-center space-x-1 self-end min-h-10 p-1 bg-white">
                        <textarea id="message-input" class="input hide-scrollbar rounded-2xl h-10" bind:value={currentMessageInput}></textarea>
                        <button id="send-button" class="btn variant-filled bg-black text-lime-200" on:click={sendMessage}>
                            <Icon name="send" size="{20}" color="rgb(217,249,157)" />
                        </button>
                    </div>
                </div>
            {:else}
                <div class="relative w-full h-full flex flex-col items-center justify-center">
                    <p class="text-xl font-medium mb-4">Give us a way to identify you</p>
                    {#if createUserForm}
                        {#if createUserFormSubmitted && !error}
                            <div class="flex flex-col space-y-4 items-center justify-center">
                                <p>We have sent a verification code to the email you provided. Please verify your email to use chat.</p>
                                <form on:submit={createUser} class="flex flex-col space-y-4 w-full">
                                    <input type="text" class="input w-full rounded-lg" placeholder="Enter verification code" bind:value={emailVerificationToken} />
                                    <button type="submit" class="btn variant-filled bg-black text-lime-200">Verify</button>
                                    {#if error}
                                    <p class="text-error-500 text-sm text-center">{error}</p>
                                    {/if}
                                </form>
                            </div>
                        {:else}
                            <form on:submit|preventDefault={sendVerification} id="create-user" class="flex flex-col justify-center space-y-4">
                                <label class="label">
                                    First Name
                                    <input required type="text" class="input rounded-lg" bind:value={userData.firstName} />
                                </label>
                                <label class="label">
                                    Last Name
                                    <input required type="text" class="input rounded-lg" bind:value={userData.lastName} />
                                </label>
                                <label class="label">
                                    Email
                                    <input required type="email" class="input rounded-lg" bind:value={userData.email} />
                                </label>
                                <label class="label">
                                    Password
                                    <input required type="password" class="input rounded-lg" bind:value={userData.password} on:change={() => userData.passwordConfirm = userData.password}/>
                                </label>
                                {#if error}
                                <p class="text-error-500 text-sm text-center">{error}</p>
                                {/if}
                                <button type="submit" class="btn variant-filled bg-black text-lime-200">Sign up</button>
                                <p>Already signed up? <button class="anchor" on:click={() => createUserForm = false}>Log in instead</button></p>
                            </form>
                        {/if}
                    {:else}
                        <form on:submit|preventDefault={authUser} id="auth-user" class="flex flex-col justify-center space-y-4">
                            <label class="label">
                                Email
                                <input required type="email" class="input rounded-lg" bind:value={userData.email} />
                            </label>
                            <label class="label">
                                Password
                                <input required type="password" class="input rounded-lg" bind:value={userData.password} />
                            </label>
                            <button type="submit" class="btn variant-filled bg-black text-lime-200">Sign in</button>
                            {#if error}
                            <p class="text-error-500 text-sm text-center">{error}</p>
                            {/if}
                            <p class="text-center">Not signed up yet? <button class="anchor" on:click={() => createUserForm = true}>Sign up now</button></p>
                        </form>
                    {/if}
                    {#if isLoading}
                        <div class="absolute w-full h-full flex items-center justify-center top-0 opacity-50 bg-white">
                            <ProgressRadial />
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    {/if}
</div>

{:else if $smallScreen}

<div class="fixed flex items-center justify-center right-0 bottom-4 z-30 w-1/2" id="chat-section">
    {#if chatButton}
        <button class=" btn flex bg-black text-lime-200 rounded-full w-32 items-center text-2xl space-x-2 font-medium justify-center py-4" id="chat-button" on:click={showChatWindow}>
            <p>{chatButtonText}</p>
            <Icon name="bubble" size="{25}" color="rgb(217,249,157)" />
        </button>
    {/if}
    {#if chatWindow}
        <div class="absolute flex flex-col items-center justify-center bg-white border border-black p-6 rounded-xl bottom-full -left-full w-screen min-h-96">
            <div class="flex w-full relative items-center justify-center mb-4">
                <img class="h-7 self-center" src="{logo}" alt="logo" />
                <button class="absolute btn -top-4 -right-7 rounded-full" on:click={hideChatWindow}>
                    <Icon name="cross" size="{15}" color="black" />
                </button>
            </div>
            {#if chatEnabled}
                <div class="w-full h-full flex flex-col justify-between items-center">
                    <p class="text-center p-4">How can we help you today?</p>
                    <div id="chat-messages" class="w-full h-64 flex flex-col overflow-scroll hide-scrollbar" use:useChatMessages></div>
                    <div class="flex w-full items-center justify-center space-x-1 self-end min-h-10 p-1 bg-white">
                        <textarea id="message-input" class="input hide-scrollbar rounded-lg h-10" bind:value={currentMessageInput}></textarea>
                        <button id="send-button" class=" rounded-lg btn variant-filled bg-black text-lime-200" on:click={sendMessage}>
                            <Icon name="send" size="{20}" color="rgb(217,249,157)" />
                        </button>
                    </div>
                </div>
            {:else}
                <div class="relative w-full h-full flex flex-col items-center justify-center">
                    <p class="text-xl font-medium mb-4">Give us a way to identify you</p>
                    {#if createUserForm}
                        {#if createUserFormSubmitted && !error}
                            <div class="flex flex-col space-y-4 items-center justify-center">
                                <p>We have sent a verification code to the email you provided. Please verify your email to use chat.</p>
                                <form on:submit={createUser} class="flex flex-col space-y-4 w-full">
                                    <input type="text" class="input w-full rounded-lg" placeholder="Enter verification code" bind:value={emailVerificationToken} />
                                    {#if error}
                                    <p class="text-error-500 text-sm text-center">{error}</p>
                                    {/if}
                                    <button type="submit" class="btn variant-filled bg-black text-lime-200">Verify</button>
                                </form>
                            </div>
                        {:else}
                            <form on:submit|preventDefault={sendVerification} id="create-user" class="flex flex-col justify-center space-y-4">
                                <label class="label">
                                    First Name
                                    <input required type="text" class="input rounded-lg" bind:value={userData.firstName} />
                                </label>
                                <label class="label">
                                    Last Name
                                    <input required type="text" class="input rounded-lg" bind:value={userData.lastName} />
                                </label>
                                <label class="label">
                                    Email
                                    <input required type="email" class="input rounded-lg" bind:value={userData.email} />
                                </label>
                                <label class="label">
                                    Password
                                    <input required type="password" class="input rounded-lg" bind:value={userData.password} on:change={() => userData.passwordConfirm = userData.password}/>
                                </label>
                                {#if error}
                                <p class="text-error-500 text-sm text-center">{error}</p>
                                {/if}
                                <button type="submit" class="btn variant-filled bg-black text-lime-200">Sign up</button>
                                <p>Already signed up? <button class="anchor" on:click={() => createUserForm = false}>Log in instead</button></p>
                            </form>
                        {/if}
                    {:else}
                        <form on:submit|preventDefault={authUser} id="auth-user" class="flex flex-col justify-center space-y-4">
                            <label class="label">
                                Email
                                <input required type="email" class="input rounded-lg" bind:value={userData.email} />
                            </label>
                            <label class="label">
                                Password
                                <input required type="password" class="input rounded-lg" bind:value={userData.password} />
                            </label>
                            <button type="submit" class="btn variant-filled bg-black text-lime-200">Sign in</button>
                            {#if error}
                            <p class="text-error-500 text-sm text-center">{error}</p>
                            {/if}
                            <p class="text-center">Not signed up yet? <button class="anchor" on:click={() => createUserForm = true}>Sign up now</button></p>
                        </form>
                    {/if}
                    {#if isLoading}
                        <div class="absolute w-full h-full flex items-center justify-center top-0 opacity-50 bg-white">
                            <ProgressRadial />
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    {/if}
</div>

{/if}

<style>
    @keyframes slideIn {
        0% {
            right: -100px;
        }
        100% {
            right: 40px;
        }
    }

    #chat-section {
        animation: slideIn 0.3s ease-in;
    }

</style>