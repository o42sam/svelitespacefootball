<script lang="ts">
  import Icon from "./Icon.svelte";
  import { createEventDispatcher } from "svelte";
  import { smallScreen, mediumScreen, largeScreen } from "../../stores/media";

  import { fade, fly, scale, slide } from "svelte/transition";
  import { create, get, update } from "../../api/users";
  import { generateRandomString } from "$lib/utils";
  
  let error: any

  let email = ""
  let isSubSuccessful = false

  let formConfig = {
    name: "GET ON OUR MAILING LIST",
    description: "We will send you an email when we release new videos on prospective talent.",
    fields: [
      { name: "email", label: "Email", type: "email", id: "email" }
    ],
    buttons: [
      { text: "Subscribe", type: "submit" },
    ]
  }
  
  const dispatch = createEventDispatcher()

  async function handleSubscribe() {
    if (email !== "") {
      error = ""

      try {
        const users = await get()
        const targetUser = users.find(user => user.email === email)
        if (targetUser) {
          if (!targetUser.isNewsletterSub) {
            update(targetUser.id, { ...targetUser, isNewsletterSub: true })
          } else {
            throw new Error("This email is already subscribed to our newsletter")
          }
        }
        else {
          await create({ email, password: generateRandomString(), isNewsletterSub: true })
        }

        dispatch("modalClosed")
      }
      catch(err: any) {
        error = err.message === undefined ? "Couldn't subscribe with this email" : err.message
        console.log(err)
      }
      finally {

      }
    }
  }
</script>
  
{#if $largeScreen}

  <div in:fade out:fade class="fixed flex flex-col items-center justify-center z-50 w-full h-full bg-black bg-opacity-90 top-0">
    <form on:submit|preventDefault={handleSubscribe} class="flex flex-col items-center justify-evenly bg-white p-9 w-1/3 h-1/3 rounded-2xl text-xl">
      <div>
        {#if formConfig.name}
        <h1 class="text-2xl">{formConfig.name}</h1>
        {/if}
        {#if formConfig.description}
        <p>{formConfig.description}</p>
        {/if}
      </div>
      {#each formConfig.fields as field, index (index)}
      <div class="flex flex-col w-3/4 text-xl">
        <label for={field.id} class="label">
            {field.label}
            <input class="input" type="email" name={field.name} bind:value={email} id={field.id}>
        </label>
      </div>
      {/each}
      {#each formConfig.buttons as button, index (index)}
      <button type="submit" class="btn" style="color: white; background-color: green; width: 60%; font-size: 20px; padding: 10px; height: 50px;" on:click={handleSubscribe}>{button.text}</button>
      {/each}
      {#if error}
      <p class="text-error-500 text-sm text-center">{error}</p>
      {/if}
    </form>
    <button class="btn mt-4" on:click|preventDefault={() => dispatch("modalClosed")} style="background-color: transparent; color: #cbff99; text-transform: capitalize; font-size: 25px; font-weight: 300;">Close</button>
  </div>
  {#if isSubSuccessful}
  <div in:fade out:fade class="fixed w-full h-full top-0 left-0 bg-black bg-opacity-90 flex items-center justify-center">
    <div in:fly out:slide class="w-1/3 h-1/4 p-6 rounded-2xl bg-neutral-200 flex flex-col items-center justify-center">
      <h2 class="text-center text-2xl text-wrap uppercase">Subscription successful</h2>
      <p class="text-xl text-wrap">You will now receive email notifications when there are any new developments at ELITE SPACE FOOTBALL</p>
    </div>
  </div>
  {/if}
{:else if $mediumScreen || $smallScreen}

<div in:fade out:fade class="fixed flex flex-col items-center justify-center z-50 w-full h-full bg-black bg-opacity-90 left-0 top-0">
  <form on:submit|preventDefault={() => {}} class="relative flex flex-col items-center justify-evenly bg-white p-6 w-4/5 h-1/3 rounded-2xl text-lg space-y-2">
    <button class="absolute btn mt-2 text-lime-200 text-xl font-light self-end top-0 right-0" on:click|preventDefault={() => dispatch("modalClosed")} >
      <Icon name="cross" size="{15}" color="black" />
    </button>
    <div class="m-0 p-0">
      {#if formConfig.name}
      <h1 class="text-lg m-0 p-0">{formConfig.name}</h1>
      {/if}
      {#if formConfig.description}
      <p class="text-sm">{formConfig.description}</p>
      {/if}
    </div>
    {#each formConfig.fields as field, index (index)}
    <div class="flex flex-col text-sm w-full">
      <label for={field.id} class="label">
          {field.label}
          <input class="input rounded-lg" bind:value={email} type="email" name={field.name} id={field.id}>
      </label>
    </div>
    {/each}
    {#each formConfig.buttons as button, index (index)}
    <button type="submit" class="btn variant-filled bg-primary-700 w-full" on:click={handleSubscribe}>{button.text}</button>
    {/each}
    {#if error}
    <p class="text-error-500 text-sm text-center">{error}</p>
    {/if}
  </form>
</div>

{/if}