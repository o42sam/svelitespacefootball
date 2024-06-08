<script lang="ts">
	import '../../app.postcss';
	import '../../global.css';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	import { initializeStores, Drawer, getDrawerStore, Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore, ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';

	import NewsLetterModal from '$lib/components/NewsLetterModal.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	
	import { slide, fade } from 'svelte/transition';

	import { smallScreen, mediumScreen, largeScreen } from '../../stores/media';
	import { currentLanguage, languages, languageChanged } from '../../stores/language';
	import { isLoading } from '../../stores/app';

	import { page } from "$app/stores";
	import { afterNavigate, goto, beforeNavigate } from '$app/navigation';
	import { afterUpdate, onMount } from 'svelte';

	import { scrollToTop } from '$lib/utils';

	import logo from "$lib/img/core/logo.png"
	import threadsLogo from "$lib/img/core/threads-placeholder.png"

	
	initializeStores();
	
	let language = $currentLanguage.trimEnd()
	let chosenLanguage = language
	const siteLanguages = [{
		name: "English", 
		code: "en" 
	},
	{
		name: "French", 
		code: "fr"
	},
	{
		name: "Spanish", 
		code: "es"
	},
	{
		name: "German", 
		code: "de"
	},
	{
		name: "Dutch",
		code: "nl"
	},
	{
		name: "Portuguese",
		code: "pt" 
	}
]

beforeNavigate(() => {
	isLoading.set(true)
})

afterNavigate(() => {
	scrollToTop()
	isLoading.set(false)
	menu[2].showDropdown = false
})


let cookiesAccepted: any;

function getCookies() {
	if (typeof window !== "undefined") {
			cookiesAccepted = window.localStorage.getItem("cookies-accepted")
		}
	}
	getCookies()
	
	function acceptCookies() {
		if (typeof window !== "undefined") {
			window.localStorage.setItem("cookies-accepted", "true")
		}
	}
	
	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'main',
		bgDrawer: 'bg-neutral-200 text-primary-700',
		bgBackdrop: 'bg-black bg-opacity-80',
		padding: 'p-0',
		position: 'right',
		width: 'w-1/2',
		height: 'h-full',
		meta: {
			drawerOpen: false
		}
	};

	const toastStore = getToastStore()
	const cookiesToastSettings: ToastSettings = {
		message: `ELITE SPACE FOOTBALL uses cookies to enhance your browsing experience. By clicking \"Accept\" this feature will be implemented on your browser according to our <a href='/${language}/cookies' style='text-decoration: underline;'>Cookies Policy</a>.`,
		action: {
			label: "Accept",
			response: () => acceptCookies(),
		},
		autohide: false,
		background: `bg-gradient-to-tr from-lime-200 via-lime-200 to-primary-700`,
		classes: `z-20 text-black border border-black text-wrap ${!$largeScreen ? "flex flex-col items-center space-y-3" : ""}`,
	}

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    onMount(() => {
        if (!$languageChanged) {
            let browserLanguage = navigator.language;

            let primaryLanguage = browserLanguage.split('-')[0];

            if ($languages.some(language => language.code === primaryLanguage)) {
                currentLanguage.set(primaryLanguage)
				if (!$page.url.pathname) {
					goto(`/${primaryLanguage}`)
				}
            } else {
                currentLanguage.set("en")
                if (!$page.url.pathname) {
					goto(`/en`)
				}
            } 
        }

		toastStore.trigger(cookiesToastSettings)
    })

	let menu = [
		{
			label: 'about',
			href: `/${language}/about`,
			showDropdown: false,
			dropdown: null,
		},
		{
			label: 'contact',
			href: `/${language}/contact`,
			showDropdown: false,
			dropdown: null,
		},
		{
			label: 'academy',
			href: '',
			showDropdown: false,
			dropdown: [
				{
					label: 'enrollment',
					href: `/${language}/academy/enrollment`
				},
				{
					label: 'media',
					href: `/${language}/academy/media`
				},
				{
					label: 'players',
					href: `/${language}/academy/players`
				},
		]},
	]
	
	let secondaryMenu = [
		{
			label: 'Cookies',
			href: `/${language}/cookies`,
		},
		{
			label: 'Privacy Policy',
			href: `/${language}/privacypolicy`,
		},
		{
			label: 'Legal Notice',
			href: `/${language}/legal`,
		},
	]

	let newsletterModalActive = false

	const footerExternalLinks = [
	{
		logoSrc: "",
		url: "https://facebook.com/elitespacefootball",
		altText: "Facebook",
		handle: "elitespacefootball"
	},
	{
		logoSrc: "",
		url: "https://instagram.com/elitespacefootball",
		altText: "Instagram",
		handle: "elitespacefootball"
	},
	{
		logoSrc: "",
		url: "https://twitter.com/_elitespace_",
		altText: "X",
		handle: "_elitespace_"
	},
	{
		logoSrc: "",
		url: "https://tiktok.com/elitespacefootball",
		altText: "TikTok",
		handle: "elitespacefootball"
	},
	{
		logoSrc: "",
		url: "https://threads.net/elitespacefootball",
		altText: "Threads",
		handle: "elitespacefootball"
	},
	];

	const utilityLinksContent = {
		contact: [
			{
			text: "Enrollment in the academy",
			href: `${language}/academy/enrollment`
			},
			{
			text: "Reach out for partnership",
			href: `${language}/contact/#partnership-and-feedback`
			},
			{
			text: "Seen any undiscovered young talent? Tell us now",
			href: `${language}/contact/#partnership-and-feedback`
			},
			{
			text: "Interested in a full game video? Get a link",
			href: `${language}/contact/#partnership-and-feedback`
			},
			{
			text: "Let us know how we can Improve",
			href: `${language}/contact/#partnership-and-feedback`
			},
		],
		videos: [
			{
			text: "See video compilations on the best players",
			href: "https://youtube.com/@elitespacefootball?si=lf1JAmhOee34ZxHg"
			},
			{
			text: "Watch game highlights",
			href: "https://youtube.com/@elitespacefootball?si=lf1JAmhOee34ZxHg"
			},
			{
			text: "See the best goals",
			href: "https://youtube.com/@elitespacefootball?si=lf1JAmhOee34ZxHg"
			},
		],
		roster: [
			{
			text: "Who are the players?",
			href: `${language}/academy/players`
			},
			{
			text: `See the players in the spotlight`,
			href: `${language}/academy/players`
			},
			{
			text: "See the youngest players",
			href: `${language}/academy/players`
			},
		],
	}

	const aboutPageNav = {
		left: {
			title: "About",
			items: [{
				label: "overview",
				href: "#overview"
			},
			{
				label: "The Academy",
				href: "#the-academy"
			}]
		},
		right: {
			title: "",
			items: [
				{
					label: "",
					href: ""
				}
			]
		}
	}

	const contactPageNav = {
		left: {
			title: "Contact us for",
			items: [{
				label: "Partnership and Feedback",
				href: "#partnership-and-feedback"
			},
			{
				label: "Academy Enrollment",
				href: "#academy-enrollment"
			}]
		},
		right: {
			title: "",
			items: [
				{
					label: "",
					href: ""
				}
			]
		}
	}

	const enrollmentPageNav = {
		left: {
			title: "Enrollment",
			items: [{
				label: "overview",
				href: "#overview"
			},
			{
				label: "Eligibility",
				href: "#eligibility"
			},
			{
				label: "Guidelines",
				href: "#guidelines"
			}]
		},
		right: {
			title: "",
			items: [
				{
					label: "",
					href: ""
				}
			]
		}
	}

</script>

<svelte:head>
	<meta name="robots" content="index, follow">
</svelte:head>
{#if $largeScreen}

<Chat
chatButtonText={"Chat with us now"}/>
{#if newsletterModalActive}
<NewsLetterModal on:modalClosed={() => newsletterModalActive = false} />
{/if}
{#if !cookiesAccepted}
<Toast
zIndex="z-40"
buttonAction="btn variant-filled bg-black text-lime"
buttonDismissLabel="Reject"
buttonDismiss="btn variant-outline outline-black"
width="w-full"
padding="py-10 px-40" />
{/if}
<header class="flex flex-col items-center justify-center fixed w-full z-40 bg-neutral-200 top-0">
	<div class="flex items-center justify-evenly p-2 w-full">
		<a href="/{language}">
			<img class="h-4 m-2" src="{logo}" alt="Elite Space Football logo" />
		</a>
		<nav>
			<ul class="flex items-center justify-evenly capitalize space-x-16 font-bold text-primary-700 bg-neutral-200">
				{#each menu as item, index (index)}
				{#if !item.dropdown}
				<li><a href="{item.href}" class="hover:text-black {$page.url.pathname.includes(item.href) ? "text-black": "text-inherit"}">{item.label}</a></li>
				{:else}
				<li class="flex flex-col relative w-40 hover:text-black {$page.url.pathname.includes("academy") ? "text-black": "text-inherit"}">
					<p on:click={() => item.showDropdown = !item.showDropdown} class="hover:cursor-pointer">{item.label}</p>
					{#if item.showDropdown}
					<ul in:slide out:slide class="font-normal absolute top-full m-0 p-2 h-auto w-full space-y-2 my-2 bg-white">
						{#each item.dropdown as dropdownItem, index (index)}
						<li class="w-full">
							<a href="{dropdownItem.href}" class="hover:text-black w-full h-1/2 {$page.url.pathname.includes(dropdownItem.href) ? "text-black": "text-primary-700"}">{dropdownItem.label}</a>
						</li>
						{/each}
					</ul>
					{/if}
				</li>
				{/if}
				{/each}
			</ul>
		</nav>
		<div>
			<label class="label space-y-2 font-thin">
				<p class="text-primary-700 text-sm">Change Language</p>
				<select class="select" bind:value={chosenLanguage} on:change={() => { currentLanguage.set(chosenLanguage); languageChanged.set(true); goto(`/`)}}>
					{#each siteLanguages as language, index (index)}
						<option value="{language.code}" class="text-sm">
							{language.name}
						</option>
					{/each}
				</select>
			</label>
		</div>
	</div>
	{#if $page.url.pathname.includes("/about")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700">
		About
	</h1>
	{:else if $page.url.pathname.includes("/contact")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700">
		Contact
	</h1>
	{:else if $page.url.pathname.includes("/academy/enrollment")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700">
		Academy Enrollment
	</h1>
	{:else if $page.url.pathname.includes("/academy/players")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700">
		The Players
	</h1>
	{:else if $page.url.pathname.includes("/media")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700">
		Media
	</h1>
	{:else if $page.url.pathname.includes("/cookies")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700">
		Cookies
	</h1>
	{:else if $page.url.pathname.includes("/legal")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700">
		Legal Notice
	</h1>
	{:else if $page.url.pathname.includes("/privacypolicy")}
	<h1 class="bg-neutral-200 text-primary-700 p-4 text-xl uppercase w-full text-center border-b-2 border-primary-700 fixed z-10">
		Privacy Policy
	</h1>
	{/if}
</header>
<aside class="fixed mt-60 capitalize text-primary-700 -z-10 w-60 p-9">
	{#if $page.url.pathname.includes("about")}
	<h3 class="text-2xl uppercase text-black pl-20 mb-6">{aboutPageNav.left.title}</h3>
	<ul class="space-y-6 pl-20">
		{#each aboutPageNav.left.items as item, index (index)}
		<li>
			<a href="{item.href}" class="hover:underline text-xl">{item.label}</a>
		</li>
		{/each}
	</ul>
	{:else if $page.url.pathname.includes("contact")}
	<h3 class="text-2xl uppercase text-black pl-20 mb-6">{contactPageNav.left.title}</h3>
	<ul class="space-y-6 pl-20">
		{#each contactPageNav.left.items as item, index (index)}
		<li>
			<a href="{item.href}" class="hover:underline text-xl">{item.label}</a>
		</li>
		{/each}
	</ul>
	{:else if $page.url.pathname.includes("enrollment")}
	<h3 class="text-2xl uppercase text-black pl-20 mb-6">{enrollmentPageNav.left.title}</h3>
	<ul class="space-y-6 pl-20">
		{#each enrollmentPageNav.left.items as item, index (index)}
		<li>
			<a href="{item.href}" class="hover:underline text-xl">{item.label}</a>
		</li>
		{/each}
	</ul>
	{/if}
</aside>
<main class="flex flex-col">
	<slot />
</main>
<aside class="fixed mt-60 capitalize text-primary-700 z-10 p-9">
	{#if $page.url.pathname.includes("about")}
	<h3 class="text-2xl uppercase text-black pl-20 mb-6">{aboutPageNav.right.title}</h3>
	<ul class="space-y-6 pl-20">
		{#each aboutPageNav.left.items as item, index (index)}
		<li>
			<a href="{item.href}" class="hover:underline text-xl">{item.label}</a>
		</li>
		{/each}
	</ul>
	{:else if $page.url.pathname.includes("contact")}
	<h3 class="text-2xl uppercase text-black pl-20 mb-6">{contactPageNav.right.title}</h3>
	<ul class="space-y-6 pl-20">
		{#each contactPageNav.left.items as item, index (index)}
		<li>
			<a href="{item.href}" class="hover:underline text-xl">{item.label}</a>
		</li>
		{/each}
	</ul>
	{:else if $page.url.pathname.includes("enrollment")}
	<h3 class="text-2xl uppercase text-black pl-20 mb-6">{enrollmentPageNav.right.title}</h3>
	<ul class="space-y-6 pl-20">
		{#each enrollmentPageNav.left.items as item, index (index)}
		<li>
			<a href="{item.href}" class="hover:underline text-xl">{item.label}</a>
		</li>
		{/each}
	</ul>
	{/if}
</aside>
<footer class="flex flex-col items-center justify-end p-10 font-thin text-white bg-primary-700 z-20">
	<div class="flex flex-col items-center p-20 text-2xl">
		<a href="" role="button" class="btn flex flex-col items-center rounded-3xl text-lime-200 uppercase p-16" on:click={() => newsletterModalActive = true}>
		  <h2 class="text-3xl m-0">Subscribe to our newsletter</h2>
		  <span class="font-thin text-3xl  normal-case">
			Get notified when we release new content on prospective players
		  </span>
		</a>
	  </div>
	  <div class="grid grid-cols-3 gap-6 w-full p-9">
		<div class="flex flex-col justify-start items-start min-h-96 p-6 text-xl">
		  {#each utilityLinksContent.contact as link}
			<a href="{link.href}" class="anchor m-3 font-thin text-white no-underline hover:underline">{link.text}</a>
		  {/each}
		</div>
		<div class="flex flex-col justify-start items-start min-h-96 p-6 text-xl">
		  {#each utilityLinksContent.roster as link}
			<a href="{link.href}" class="anchor m-3 font-thin text-white no-underline hover:underline">{link.text}</a>
		  {/each}
		</div>
		<div class="flex flex-col justify-start items-start min-h-96 p-6 text-xl">
		  {#each utilityLinksContent.videos as link}
			 <a href="{link.href}" class="anchor m-3 font-thin text-white no-underline hover:underline">{link.text}</a>
		  {/each}
		</div>
	  </div>
	  <div class="flex items-center justify-evenly">
		{#each footerExternalLinks as link, index (index)}
		<a href={link.url} class="flex flex-col justify-center items-center p-6 text-white space-y-4">
			{#if link.altText === "Facebook"}
			<Icon name="facebook" size="{40}" color="white" />
			{:else if link.altText === "Instagram"}
			<Icon name="instagram" size="{40}" color="white" />
			{:else if link.altText === "TikTok"}
			<Icon name="tiktok" size="{40}" color="white" />
			{:else if link.altText === "X"}
			<Icon name="x, twitter" size="{40}" color="white" />
			{:else if link.altText === "Threads"}
			<img src="{threadsLogo}" alt="" class="w-10 h-10">
			{/if}
			<h3>{link.handle}</h3>
		</a>
		{/each}
	  </div>
		<img class="h-4 m-2" src="{logo}" alt="logo" />
		<div class="flex items-center justify-evenly p-4 space-x-4">
			{#each secondaryMenu as item, index (index)}
			<a href="{item.href}" class="text-white hover:underline">{item.label}</a>
			{#if index !== secondaryMenu.length - 1}
			<p>|</p>
			{/if}
			{/each}
		</div>
	  <p>The Official Website Of ELITE SPACE FOOTBALL</p>
	  <p>Copyright 2024</p>
</footer>
{#if $isLoading}
<LoadingScreen />
{/if}

{:else if $mediumScreen}

<Drawer
zIndex="z-50">
	<nav class="flex flex-col justify-between h-full">
		<ul class="flex flex-col items-start justify-evenly uppercase space-y-10 font-bold text-primary-700 bg-neutral-200 p-10">
			<!-- <li><a href="/{language}" class="active:text-black" on:click={() => drawerStore.close()}>Home</a></li> -->
			<a href="/{language}" on:click={() => drawerStore.close()}>
				<img class="h-4 m-2" src="{logo}" alt="logo" />
			</a>
			{#each menu as item, index (index)}
			{#if !item.dropdown}
			<li><a href="{item.href}" class="active:text-black {$page.url.pathname.includes(item.href) ? "text-black": "text-inherit"}" on:click={() => drawerStore.close()}>{item.label}</a></li>
			{:else}
			<li class="flex flex-col {$page.url.pathname.includes("academy") ? "text-black": "text-inherit"}">
				<p on:click={() => item.showDropdown = !item.showDropdown}>{item.label}</p>
				{#if item.showDropdown}
				<ul in:slide out:slide class="relative font-normal m-0 h-auto w-full space-y-4 my-2 text-inherit capitalize top-4" id="main-dropdown-small">
					{#each item.dropdown as dropdownItem, index (index)}
					<li class="w-full">
						<a href="{dropdownItem.href}" class="active:text-black w-full h-1/2 {$page.url.pathname.includes(dropdownItem.href) ? "text-black": "text-primary-700"}" on:click={() => drawerStore.close()}>{dropdownItem.label}</a>
					</li>
					{/each}
				</ul>
				{/if}
			</li>
			{/if}
			{/each}
		</ul>
		<div class="bottom-0">
			<div class="px-9">
				<label class="label space-y-2 font-thin text-sm">
					<p class="text-primary-700">Change Language</p>
					<select class="select" bind:value={chosenLanguage} on:change={() => { currentLanguage.set(chosenLanguage); languageChanged.set(true); goto(`/`)}}>
						{#each siteLanguages as language, index (index)}
							<option value="{language.code}">
								{language.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<ul class="flex flex-col items-start justify-evenly capitalize space-y-6 font-light text-primary-700 bg-neutral-200 p-10">
				{#each secondaryMenu as item, index (index)}
				<li><a href="{item.href}" class="active:text-black {$page.url.pathname.includes(item.href) ? "text-black": ""}" on:click={() => drawerStore.close()}>{item.label}</a></li>
				{/each}
			</ul>
		</div>
	</nav>
</Drawer>
{#if !cookiesAccepted}
<Toast
zIndex="z-30"
buttonAction="btn variant-filled bg-black text-lime"
buttonDismissLabel="Reject"
buttonDismiss="btn variant-outline outline-black bg-lime-200"
width="w-full"
height="h-auto"
padding="p-10" />
{/if}
{#if newsletterModalActive}
<NewsLetterModal on:modalClosed={() => newsletterModalActive = false} />
{/if}
<Chat chatButtonText={"Chat with us"}/>
{#if !$drawerStore.open}
<header class="fixed w-full z-50">
	<AppBar background="bg-neutral-200">
		<svelte:fragment slot="trail">
			<a href="/{language}">
				<img class="h-4 m-2" src="{logo}" alt="logo" />
			</a>
		</svelte:fragment>
		<svelte:fragment slot="lead">
			<button class="flex items-center justify-center w-10 h-10 bg-neutral-200 focus:outline-none" on:click={() => drawerStore.open(drawerSettings)}>
				<div class="relative flex flex-col  justify-between items-center text-primary-700 h-4 w-6">
					<span class="block bg-primary-700 h-0.5 w-full"></span>
					<span class="block bg-primary-700 h-0.5 w-full"></span>
					<span class="block bg-primary-700 h-0.5 w-full"></span>
				</div>
			</button>
		</svelte:fragment>
	</AppBar>
</header>
{/if}
<main class="pt-24">
	<slot />
</main>
<footer class="flex flex-col items-center justify-end p-10 font-thin text-white bg-primary-700">
	<div class="flex flex-col items-center p-2 text-lg my-6">
		<a href="" role="button" class="btn flex flex-col items-center text-lime-200 uppercase p-2 text-wrap" on:click={() => newsletterModalActive = true}>
		  <h2 class="text-lg m-0 text-wrap">Subscribe to our newsletter</h2>
		  <span class="font-thin text-lg text-wrap normal-case">
			Get notified when we release new content on prospective players
		  </span>
		</a>
	  </div>
	  <div class="flex items-center justify-evenly space-x-16">
		{#each footerExternalLinks as link, index (index)}
		<a href={link.url} class="flex flex-col justify-center items-center p-1 text-white space-y-4">
			{#if link.altText === "Facebook"}
			<Icon name="facebook" size="{30}" color="white" />
			{:else if link.altText === "Instagram"}
			<Icon name="instagram" size="{30}" color="white" />
			{:else if link.altText === "TikTok"}
			<Icon name="tiktok" size="{30}" color="white" />
			{:else if link.altText === "X"}
			<Icon name="x, twitter" size="{30}" color="white" />
			{:else if link.altText === "Threads"}
			<img src="{threadsLogo}" alt="" class="w-8 h-8">
			{/if}
		</a>
		{/each}
	  </div>
		<img class="h-4 m-2" src="{logo}" alt="logo" />
	  <p>The Official Website Of ELITE SPACE FOOTBALL</p>
	  <p>Copyright 2024</p>
</footer>
{#if $isLoading}
<LoadingScreen />
{/if}

{:else if $smallScreen}

<Drawer
zIndex="z-50">
	<nav class="flex flex-col justify-between h-full">
		<ul class="flex flex-col items-start justify-evenly uppercase space-y-10 font-bold text-primary-700 bg-neutral-200 p-10">
			<!-- <li><a href="/{language}" class="active:text-black" on:click={() => drawerStore.close()}>Home</a></li> -->
			<a href="/{language}" on:click={() => drawerStore.close()}>
				<img class="h-4" src="{logo}" alt="logo" />
			</a>
			{#each menu as item, index (index)}
			{#if !item.dropdown}
			<li><a href="{item.href}" class="active:text-black {$page.url.pathname.includes(item.href) ? "text-black": "text-inherit"}" on:click={() => drawerStore.close()}>{item.label}</a></li>
			{:else}
			<li class="flex flex-col {$page.url.pathname.includes("academy") ? "text-black": "text-inherit"}">
				<p on:click={() => item.showDropdown = !item.showDropdown}>{item.label}</p>
				{#if item.showDropdown}
				<ul in:slide out:slide class="relative font-normal m-0 h-auto w-full space-y-4 my-2 text-inherit capitalize top-4" id="main-dropdown-small">
					{#each item.dropdown as dropdownItem, index (index)}
					<li class="w-full">
						<a href="{dropdownItem.href}" class="active:text-black w-full h-1/2 {$page.url.pathname.includes(dropdownItem.href) ? "text-black": "text-primary-700"}" on:click={() => drawerStore.close()}>{dropdownItem.label}</a>
					</li>
					{/each}
				</ul>
				{/if}
			</li>
			{/if}
			{/each}
		</ul>
		<div class="bottom-0">
			<div class="px-9">
				<label class="label space-y-2 font-thin text-sm">
					<p class="text-primary-700">Change Language</p>
					<select class="select" bind:value={chosenLanguage} on:change={() => { currentLanguage.set(chosenLanguage); languageChanged.set(true); goto(`/`)}}>
						{#each siteLanguages as language, index (index)}
							<option value="{language.code}">
								{language.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<ul class="flex flex-col items-start justify-evenly capitalize space-y-6 font-light text-primary-700 bg-neutral-200 p-10">
				{#each secondaryMenu as item, index (index)}
				<li><a href="{item.href}" class="active:text-black {$page.url.pathname.includes(item.href) ? "text-black": ""}" on:click={() => drawerStore.close()}>{item.label}</a></li>
				{/each}
			</ul>
		</div>
	</nav>
</Drawer>
{#if !cookiesAccepted}
<Toast
zIndex="z-40"
buttonAction="btn variant-filled bg-black text-lime"
buttonDismissLabel="Reject"
buttonDismiss="btn variant-outline outline-black bg-lime-200"
width="w-full"
padding="p-4" />
{/if}
{#if newsletterModalActive}
<NewsLetterModal on:modalClosed={() => newsletterModalActive = false} />
{/if}
<Chat chatButtonText={"Chat"} />
{#if !$drawerStore.open}
<header class="fixed w-full z-40 top-0">
	<AppBar background="bg-neutral-200">
		<svelte:fragment slot="trail">
			<a href="/{language}">
				<img class="h-4 m-2" src="{logo}" alt="logo" />
			</a>
		</svelte:fragment>
		<svelte:fragment slot="lead">
			<button class="flex items-center justify-center w-10 h-10 bg-neutral-200 focus:outline-none" on:click={() => { drawerStore.open(drawerSettings)}}>
				<div class="relative flex flex-col  justify-between items-center text-primary-700 h-4 w-6">
					<span class="block bg-primary-700 h-0.5 w-full"></span>
					<span class="block bg-primary-700 h-0.5 w-full"></span>
					<span class="block bg-primary-700 h-0.5 w-full"></span>
				</div>
			</button>
		</svelte:fragment>
	</AppBar>
</header>
{/if}
<main class="">
	<slot />
</main>
<footer class="flex flex-col items-center justify-end py-10 font-thin text-white bg-primary-700 w-full">
	<div class="flex flex-col items-center p-2 text-lg my-6">
		<a href="" role="button" class="btn flex flex-col items-center text-lime-200 uppercase p-2 w-4/5" on:click={() => newsletterModalActive = true}>
		  <h2 class="text-lg m-0">Subscribe to our newsletter</h2>
		  <p class="font-thin text-sm normal-case ios-word-wrap">
			Get notified when we release new content on prospective players
		  </p>
		</a>
	  </div>
	  <div class="flex flex-col items-center justify-evenly">
		{#each footerExternalLinks as link, index (index)}
		<a href={link.url} class="flex flex-col justify-center items-center p-6 text-white space-y-4">
			{#if link.altText === "Facebook"}
			<Icon name="facebook" size="{40}" color="white" />
			{:else if link.altText === "Instagram"}
			<Icon name="instagram" size="{40}" color="white" />
			{:else if link.altText === "TikTok"}
			<Icon name="tiktok" size="{40}" color="white" />
			{:else if link.altText === "X"}
			<Icon name="x, twitter" size="{40}" color="white" />
			{:else if link.altText === "Threads"}
			<img src="{threadsLogo}" alt="" class="w-10 h-10">
			{/if}
			<h3>{link.handle}</h3>
		</a>
		{/each}
	  </div>
		<img class="h-4 m-2" src="{logo}" alt="logo" />
	  <p>The Official Website Of ELITE SPACE FOOTBALL</p>
	  <p>Copyright 2024</p>
</footer>
{#if $isLoading}
<LoadingScreen />
{/if}

{/if}
