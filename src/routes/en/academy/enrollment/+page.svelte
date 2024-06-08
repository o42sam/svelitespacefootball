<script lang="ts">
	  import { smallScreen, mediumScreen, largeScreen } from '../../../../stores/media';
    
    export let data: any;

    import img14 from "$lib/img/other/14.jpg";
    import img25 from "$lib/img/other/25.jpg";
    import img18 from "$lib/img/other/18.jpg";
    import img38 from "$lib/img/other/38.jpg";
    import img35 from "$lib/img/other/35.jpg";
    import img34 from "$lib/img/other/34.jpg";
    import img32 from "$lib/img/other/32.jpg";

    const [ enrollmentP, enrollmentLi ] = data.enrollment.split("<li>");
    const [ eligibilityP, eligibilityLi ] = data.eligibility.split("<li>");
    const [ guidelinesP, guidelinesLi ] = data.guidelines.split("<li>");

    import SecondaryBillboard from '$lib/components/SecondaryBillboard.svelte';

    const billboardImages0 = [
      img14,
    ]

    const billboardImages1 = [
      img25,
      img38,
      img18,
      img35,
    ]

    const billboardImages2 = [
      img34,
      img32,
    ]
</script>

<svelte:head>
	<title>Elite Space Football Academy Enrollment</title>
	<meta name="description" content="Interested in joining the Elite Space Football academy? Get info as well as guidlines on the process of enrollment in the academy." />
	<meta name="keywords" content="enrollment, enroll, enrol, how, how do I enroll, how do I, elite space football company, elite, elite space, elite space football, football, talent" />
	
	<meta property="og:title" content="Elite Space Football | Academy Enrollment">
	<meta property="og:description" content="Interested in joining the Elite Space Football academy? Get info as well as guidlines on the process of enrollment in the academy.">
	<meta property="og:image" content="{img14}">
	<meta property="og:url" content="https://elitespacefootball.com/en/academy/enrollment">
	<meta property="og:type" content="website">
</svelte:head>
{#if $largeScreen}
<section class="flex flex-col items-center p-16 pt-0 bg-gradient-to-r from-neutral-200 via-white to-neutral-200 w-3/5 self-center text-xl mt-32">
    <h2 id="overview" class="text-center uppercase text-2xl py-10">Overview</h2>
    <p>
      {enrollmentP}
    </p>
    <ul>
      {#each enrollmentLi.split("\r") as item, index (index)}
        <li>{item}</li>
      {/each}
    </ul>
    <SecondaryBillboard
    images={billboardImages0}
    caption="Training at the Federal College of Dental Studies, Trans-Ekulu, Enugu"
    />
    <h2 id="eligibility" class="text-center uppercase text-2xl py-10">Eligibility</h2>
    <p>
      {eligibilityP}
    </p>
    <ul>
      {#each eligibilityLi.split("\r") as item, index (index)}
        <li>{item}</li>
      {/each}
    </ul>
    <SecondaryBillboard
    images={billboardImages1}
    caption="Training at the Enugu Rangers Camp, Liberty Estate, Enugu" />
    <h2 id="guidelines" class="text-center uppercase text-2xl py-10">Guidelines</h2>
    <SecondaryBillboard
    images={billboardImages2} />
    <p>
      {guidelinesP}
    </p>
    <ul>
      {#each guidelinesLi.split("\r") as item, index (index)}
        <li>{item}</li>
      {/each}
    </ul>
    <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>

{:else if $mediumScreen}

<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16 z-10">
  Academy enrollment
</h1>
<section class="flex flex-col items-center p-8 pt-0 bg-neutral-200 w-full self-center text-lg mt-20">
  <h2 id="overview" class="text-center uppercase text-2xl py-6">Overview</h2>
  <p>
    {enrollmentP}
  </p>
  <ul>
    {#each enrollmentLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <SecondaryBillboard
  images={billboardImages0}
  caption="Training at the Federal College of Dental Studies, Trans-Ekulu, Enugu"
  />
  <h2 id="eligibility" class="text-center uppercase text-2xl py-6">Eligibility</h2>
  <p>
    {eligibilityP}
  </p>
  <ul>
    {#each eligibilityLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <SecondaryBillboard
  images={billboardImages1}
  caption="Training at the Enugu Rangers Camp, Liberty Estate, Enugu" />
  <h2 id="guidelines" class="text-center uppercase text-2xl py-6">Guidelines</h2>
  <SecondaryBillboard
  images={billboardImages2} />
  <p>
    {guidelinesP}
  </p>
  <ul>
    {#each guidelinesLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>

{:else if $smallScreen}
<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16 z-10">
  Academy enrollment
</h1>
<section class="flex flex-col items-center p-8 pt-0 bg-neutral-200 w-full self-center text-lg mt-36">
  <h2 id="overview" class="text-center uppercase text-2xl py-6">Overview</h2>
  <p>
    {enrollmentP}
  </p>
  <ul>
    {#each enrollmentLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <SecondaryBillboard
  images={billboardImages0}
  caption="Training at the Federal College of Dental Studies, Trans-Ekulu, Enugu"
  />
  <h2 id="eligibility" class="text-center uppercase text-2xl py-6">Eligibility</h2>
  <p>
    {eligibilityP}
  </p>
  <ul>
    {#each eligibilityLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <SecondaryBillboard
  images={billboardImages1}
  caption="Training at the Enugu Rangers Camp, Liberty Estate, Enugu" />
  <h2 id="guidelines" class="text-center uppercase text-2xl py-6">Guidelines</h2>
  <SecondaryBillboard
  images={billboardImages2} />
  <p>
    {guidelinesP}
  </p>
  <ul>
    {#each guidelinesLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
</section>

{/if}

<style>
  li {
    padding: 10px;
    margin: 25px 0 25px 0;
  }
</style>