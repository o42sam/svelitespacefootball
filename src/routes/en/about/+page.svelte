<script context="module">
  	import { smallScreen, mediumScreen, largeScreen } from '../../../stores/media';
    import { currentLanguage } from '../../../stores/language';
	  import SecondaryBillboard from '$lib/components/SecondaryBillboard.svelte';
    import img28 from "$lib/img/other/28.jpg";
    import img31 from "$lib/img/other/31.jpg";
    import img26 from "$lib/img/other/26.jpg";
    import img21 from "$lib/img/other/21.jpg";
    import img42 from "$lib/img/other/42.jpg";
    import img16 from "$lib/img/other/16.jpg";
    import img46 from "$lib/img/other/46.jpg";
    import img43 from "$lib/img/other/43.jpg";
    import img17 from "$lib/img/other/17.jpg";
    import logo from "$lib/img/core/logo.png"

</script>
<script lang="ts">
    export let data: any;

    const introParts = data.intro.split("\r");
    const mainParts = data.main.split("\r");
    const [ quote, author ] = data.quotes.split("\r");

    export const load = async () => {
        const data = {
        pageMenuLeft: {
        title: "About",
        position: "left",
        items: [
            { name: "Overview", href: "#overview" },
            { name: "The Academy", href: "#the-academy" },
        ]}
        }
    }

    const billboardImages1 = [
      img28,
      img31,
    ]

    const billboardImages2 = [
      img26,
      img21,
      img42,
    ]

    const billboardImages3 = [
      img16,
      img17,
      img43,
      img46,
    ]
</script>

<svelte:head>
	<title>About Elite Space Football</title>
	<meta name="description" content="Learn more about the what and why of Elite Space Football. Understand our journey so far." />
	<meta name="keywords" content="about, what, is, elite space football company, elite, elite space, elite space football, football, talent" />
	
	<meta property="og:title" content="Elite Space Football | About">
	<meta property="og:description" content="Learn more about the what and why of Elite Space Football. Understand our journey so far.">
	<meta property="og:image" content="{logo}">
	<meta property="og:url" content="https://elitespacefootball.com/en/about">
	<meta property="og:type" content="website">
</svelte:head>
{#if $largeScreen}

<section class="flex flex-col items-center p-16 pt-0 bg-gradient-to-r from-neutral-200 via-white to-neutral-200 w-3/5 self-center text-xl mt-32">
    <h2 id="overview" class="text-center uppercase text-2xl py-10">Overview</h2>
    <p>{introParts[0]}</p>
    <ul>
      {#each data.objectives as objective, index (index)}
        <li>{objective}</li>
      {/each}
    </ul>
    <p>{introParts[1]}</p>
    <h2 id="the-academy" class="text-center uppercase text-2xl py-10">The Academy</h2>
    <div class="bg-primary-700 text-white w-5/6 mb-9 p-9 rounded-xl text-2xl text-center hover:shadow-lg">
      <p class="font-medium text-2xl">{data.missionStatement}</p>
      <p class="font-thin text-2xl text-center my-9">- The Elite Space Football Family</p>
    </div>
    <SecondaryBillboard
    images={billboardImages1}
    widthClass="w-full"
    heightClass="h-full"
    caption="ELITE SPACE FOOTBALL academy pre-match warm up" />
    <p>{mainParts[0]}</p>
    <SecondaryBillboard
    images={billboardImages2} />
    <div class="m-9">
      <p class="font-medium text-2xl">{quote}</p>
      <p class="font-thin text-2xl text-center my-9">- {author}</p>
    </div>
    <SecondaryBillboard
    images={billboardImages3} />
    <p>{mainParts[1]}</p>
    <p class="text-neutral-700 text-center text-xs m-4">Last updated on May 30, 2024</p>
</section>

{:else if $mediumScreen}
<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16 z-10">
  About
</h1>
<section class="flex flex-col items-center p-8 pt-0 bg-neutral-200 w-full self-center text-lg mt-20">
  <h2 id="overview" class="text-center uppercase text-2xl py-6">Overview</h2>
  <p>{introParts[0]}</p>
  <ul>
    {#each data.objectives as objective, index (index)}
      <li>{objective}</li>
    {/each}
  </ul>
  
  <p>{introParts[1]}</p>
  <h2 id="the-academy" class="text-center uppercase text-2xl py-6">The Academy</h2>
  <div class="bg-primary-700 text-white w-full mb-9 p-8 rounded-xl text-center hover:shadow-lg">
    <p class="font-medium text-xl">{data.missionStatement}</p>
    <p class="font-thin text-2xl text-center my-9">- The Elite Space Football Family</p>
  </div>
  <SecondaryBillboard
  images={billboardImages1}
  widthClass="w-full"
  heightClass="h-full"
  caption="ELITE SPACE FOOTBALL academy pre-match warm up" />
  <p>{mainParts[0]}</p>
  <SecondaryBillboard
  images={billboardImages2} />
  <div class="m-9">
    <p class="font-medium text-xl">{quote}</p>
    <p class="font-thin text-xl text-center my-9">- {author}</p>
  </div>
  <SecondaryBillboard
  images={billboardImages3} />
  <p>{mainParts[1]}</p>
  <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>

{:else if $smallScreen}

<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16 z-10">
  About
</h1>
<section class="flex flex-col items-center p-8 pt-0 bg-neutral-200 w-full self-center text-lg border-t-2 border-primary-700 mt-36">
  <h2 id="overview" class="text-center uppercase text-2xl py-10">Overview</h2>
  <p>{introParts[0]}</p>
  <ul>
    {#each data.objectives as objective, index (index)}
      <li>{objective}</li>
    {/each}
  </ul>
  <p>{introParts[1]}</p>
  <h2 id="the-academy" class="text-center uppercase text-2xl py-6">The Academy</h2>
  <div class="bg-primary-700 text-white w-full mb-9 p-8 rounded-xl text-center hover:shadow-lg">
    <p class="font-medium text-xl">{data.missionStatement}</p>
    <p class="font-thin text-2xl text-center my-9">- The Elite Space Football Family</p>
  </div>
  <SecondaryBillboard
  images={billboardImages1}
  widthClass="w-full"
  heightClass="h-full"
  caption="ELITE SPACE FOOTBALL academy pre-match warm up" />
  <p>{mainParts[0]}</p>
  <SecondaryBillboard
  images={billboardImages2} />
  <div class="m-9">
    <p class="font-medium text-xl">{quote}</p>
    <p class="font-thin text-xl text-center my-9">- {author}</p>
  </div>
  <SecondaryBillboard
  images={billboardImages3} />
  <p>{mainParts[1]}</p>
  <p class="text-neutral-700 text-xs text-center m-4 bg-lim bg-neu">Last updated on May 30, 2024</p>
</section>

{/if}

<style>
  li {
    padding: 10px;
    margin: 25px 0 25px 0;
  }
</style>