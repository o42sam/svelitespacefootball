<script context="module">
  import MainNav from "../lib/components/MainNav.svelte"
  import SearchBar from "../lib/components/SearchBar.svelte"
  import ExternalMediaLink from "../lib/components/ExternalMediaLink.svelte"
  import { utilityLinksContent, footerExternalLinks } from "../lib/page-content/footer-links.js"
  import FormModal from "../lib/components/FormModal.svelte"
  import PageMenu from "../lib/components/PageMenu.svelte"
  import { pageMenuItems } from "$lib/page-content/page-menu.js"
  import { page } from "$app/stores"
  import Button from "../lib/components/Button.svelte"
  import { onMount } from "svelte"
</script>

<script>
  let subscriptionModalActive

  let headerClassName = "main-header-default"

  $: headerClassName = $page.url.pathname.includes("roster") ? "main-header-roster-view" : "main-header-default"
</script>

{#if subscriptionModalActive}
<FormModal active={subscriptionModalActive} on:modalClosed={() => subscriptionModalActive = false} formConfig={{
  name: "GET ON OUR MAILING LIST",
  description: "We will send you an email when we release new videos on prospective talent.",
  fields: [
    { name: "email", label: "Email", type: "email", id: "email" }
  ],
  buttons: [
    { text: "Subscribe", type: "submit" },
  ]
}} />
{/if}
<header class={headerClassName}>
  <a href="/">
    <img class="main-logo" src="/src/lib/static/main-logo.png" alt="Main logo" height=80 />
  </a>
  <MainNav />
  <SearchBar className="main-search" placeholder="Search Players..." />
</header>
<main>
  {#if pageMenuItems[$page.url.pathname]}
  <PageMenu
  title={pageMenuItems[$page.url.pathname][0]?.title || ""}
  menuItems={pageMenuItems[$page.url.pathname][0]?.items || []} />
  {/if}
  <slot />
  {#if pageMenuItems[$page.url.pathname]}
  <PageMenu
  title={pageMenuItems[$page.url.pathname][1]?.title || ""}
  menuItems={pageMenuItems[$page.url.pathname][1]?.items || []} />
  {/if}
</main>
<footer class="main-footer">
  <div class="subscription">
    <Button on:click={() => subscriptionModalActive = true} style="min-width: 800px; color: #cbff99; background-color: transparent; border-radius: 0px">
      <h2 style="font-size: 30px; margin: 10px">Subscribe to our newsletter</h2>
      <span style="text-transform: none; font-weight: 300; font-size: 25px; color: #cbff99;">
        Get notified when we release new content on prospective players
      </span>
    </Button>
  </div>
  <div class="utility-links">
    <div class="contact-links">
      {#each utilityLinksContent.contact as link}
         <a href={link.href}>{link.text}</a>
      {/each}
    </div>
    <div class="roster-links">
      {#each utilityLinksContent.roster as link}
         <a href={link.href}>{link.text}</a>
      {/each}
    </div>
    <div class="video-links">
      {#each utilityLinksContent.videos as link}
         <a href={link.href}>{link.text}</a>
      {/each}
    </div>
  </div>
  <div class="footer-external-links">
    {#each footerExternalLinks as link, index (index)}
      <ExternalMediaLink {link}/>
    {/each}
  </div>
  <img src="/src/lib/static/main-logo.png" height=90 alt="Main logo">
  <p>The Official Website Of ELITE SPACE FOOTBALL</p>
  <p>Copyright 2024</p>
</footer>

<style>
  .hidden-header {
    position: relative;
  }

  header {
    z-index: 5;
  }

  .main-header-default {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 40px;
    padding-top: 50px;
    background-color: #dedede;
    position: sticky;
    top: 0;
  }

  .main-header-roster-view {
    display: flex;
    justify-content: space-around;
    padding: 50px;
    background-color: #cbff99;
    position: sticky;
    top: 0;
  }

  main {
    min-height: 300px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  a {
    color: white;
  }

  .main-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-height: 300px;
    padding: 20px;
    font-weight: 100;
    color: white;
    background-color: green;
  }

  .utility-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16;
    width: 100%;
    padding: 50px;
  }

  .utility-links > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 150px;
    padding: 50px;
    font-size: 19px;
  }

  .utility-links > div a {
    margin: 10px;
    font-weight: 300;
  }

  .footer-external-links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .subscription {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    font-size: 18px;
  }
</style>