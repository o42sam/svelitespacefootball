<script context="module">
  import { page } from "$app/stores"
</script>

<script>
  const menu = [
    { 
      text: "home",
      anchorHref: "/",
    },
    {
      text: "about",
      anchorHref: "/about",
    },
    { 
      text: "contact us",
      anchorHref: "/contactus",
    },
    { text: "academy",
      nestedItems: [
        { text: "roster", anchorHref: "/academy/roster" },
        { text: "enrollment", anchorHref: "/academy/enrollment" },
      ]
    },
  ]

  $: academyMenu = false
</script>

<ul class="main-nav">
  {#each menu as item, index (index)}
    {#if !item.nestedItems}
      <li class={$page.url.pathname === item.anchorHref + "/" || $page.url.pathname === item.anchorHref ? "main-nav-item-selected" : "main-nav-item-deselected"}>
        <a href={item.anchorHref}>{item.text}</a>
      </li>
    {:else}
      <li class={$page.url.pathname.includes(item.text) ? "main-nav-item-selected" : "main-nav-item-deselected"}>
        <a href="" on:click|preventDefault={() => academyMenu = !academyMenu}>{item.text}</a>
        {#if academyMenu && menu.find(item => item["nestedItems"])}
          <ul class="academy-nav">
            {#each menu.find(item => item["nestedItems"]).nestedItems as subItem, index (index)}
              <li on:click={() => academyMenu = false} on:keyup><a href={subItem.anchorHref}>{subItem.text}</a></li>
            {/each}
          </ul>
        {/if}
      </li>
    {/if}
  {/each}
</ul>

<style>
  * {
    padding: 0px;
  }

  .main-nav {
    all: unset;
    position: relative;
    width: 600px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    color: green;
  }

  .main-nav-item-selected {
    background-color: green;
    color: white;
  }

  .main-nav-item-deselected {
    background-color: transparent;
    color: green;
  }

  .academy-nav {
    position: absolute;
    left: 75%;
    top: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 90px;
    width: 25%;
    background-color: white;
    color: green;
  }

  li {
    all: unset;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: inherit;
  }

  .main-nav > li a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .main-nav > li {
    height: 100%;
    width: 25%;
  }

  .main-nav > li a {
    transition: transform .2s ease-in;
  }

  .main-nav > li > a:hover {
    transform: scale(1.05);
  }

  .academy-nav li {
    width: 100%;
    height: 50%;
  }

  .academy-nav li a {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .academy-nav li a:hover {
    background-color: #cdcdcd;
  }
</style>