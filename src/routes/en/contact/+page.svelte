<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import SecondaryBillboard from "$lib/components/SecondaryBillboard.svelte";
    import { smallScreen, mediumScreen, largeScreen } from '../../../stores/media';

    import img33 from "$lib/img/other/33.jpg";
    import img47 from "$lib/img/other/47.jpg";
    import logo from "$lib/img/core/logo.png"

    export let data;

    const emailAddress = 'elitespacefootball@gmail.com'

    function sendEmail() {
        const mailtoLink = `mailto:${emailAddress}`

        const emailWindow = window.open(mailtoLink, '_blank')
        if (emailWindow) {
            emailWindow.focus();
        } else {
            window.location.href = mailtoLink
        }
    }

    const billboardImages0 = [
      img33,
    ]

    const billboardImages1 = [
      img47,
    ]

    function openWhatsApp() {
        window.open('https://api.whatsapp.com/send?phone=2348032536840&text=Contacting%20Elite%20Space%20Football', '_blank');
    }
</script>

<svelte:head>
	<title>Contact Elite Space Football</title>
	<meta name="description" content="Reach out to us now for more information." />
	<meta name="keywords" content="contact, reach out, what, which, where is elite space football, where, how, how do I enroll, how do I, elite space football company, elite, elite space, elite space football, football, talent" />
	
	<meta property="og:title" content="Elite Space Football | Contact">
	<meta property="og:description" content="Reach out to us now for more information.">
	<meta property="og:image" content="{logo}">
	<meta property="og:url" content="https://elitespacefootball.com/en/contact">
	<meta property="og:type" content="website">
</svelte:head>
{#if $largeScreen}
<section class="flex flex-col items-center p-16 pt-0 bg-gradient-to-r from-neutral-200 via-white to-neutral-200 w-3/5 self-center text-xl mt-32">
    <h2 id="partnership-and-feedback" class="text-center uppercase text-3xl py-10">Partnership and Feedback</h2>
    <SecondaryBillboard
    images={billboardImages0} />
    <p>
      {data.partnershipAndFeedback}
    </p>
    <h2 id="academy-enrollment" class="text-center uppercase text-3xl py-10">Academy Enrollment</h2>
    <SecondaryBillboard
    images={billboardImages1} />
    <p>
    <p>
      {data.academyEnrollment}
    </p>
    <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
    <section class="flex flex-col items-center justify-evenly w-full h-96 p-9">
      <a class="btn flex variant-filled bg-primary-700 text-3xl uppercase p-9 space-x-4" href="" on:click={sendEmail}>
        <p>Send us an email</p>
        <Icon name="mail" size="{40}" color="white" />
      </a>
      <a class="btn flex variant-filled bg-primary-700 text-3xl uppercase p-9 space-x-4" href="" on:click={openWhatsApp}>
        <p>WhatsApp Direct Message</p>
        <Icon name="whatsapp" size="{40}" color="white" />
      </a>
    </section>
</section>

{:else if $mediumScreen}
<h1 class="bg-neutral-200 text-primary-700 p-6 text-3xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16 z-10">
  Contact
</h1>
<section class="flex flex-col items-center p-8 pt-0 bg-neutral-200 w-full self-center text-lg mt-20">
  <h2 id="partnership-and-feedback" class="text-center uppercase text-2xl py-6">Partnership and Feedback</h2>
  <SecondaryBillboard
  images={billboardImages0} />
  <p>
    {data.partnershipAndFeedback}
  </p>
  <h2 id="academy-enrollment" class="text-center uppercase text-2xl py-6">Academy Enrollment</h2>
  <SecondaryBillboard
  images={billboardImages1} />
  <p>
  <p>
    {data.academyEnrollment}
  </p>
  <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
  <section class="flex flex-col items-center justify-evenly w-full h-96 p-9">
    <a class="btn flex variant-filled text-wrap bg-primary-700 text-lg uppercase p-6 space-x-4 min-w-96" href="" on:click={sendEmail}>
      <p>Send us an email</p>
      <Icon name="mail" size="{30}" color="white" />
    </a>
    <a class="btn flex variant-filled text-wrap bg-primary-700 text-lg uppercase p-6 space-x-4 min-w-96" href="" on:click={openWhatsApp}>
      <p>WhatsApp Direct Message</p>
      <Icon name="whatsapp" size="{30}" color="white" />
    </a>
  </section>
</section>

{:else if $smallScreen}
<h1 class="bg-neutral-200 text-primary-700 p-6 text-2xl uppercase w-full text-center fixed border-b-2 border-primary-700 top-16 z-10">
  Contact
</h1>
<section class="flex flex-col items-center p-8 pt-0 bg-neutral-200 w-full self-center text-lg border-t-2 border-primary-700 mt-36">
  <h2 id="partnership-and-feedback" class="text-center uppercase text-2xl py-6">Partnership and Feedback</h2>
  <SecondaryBillboard
  images={billboardImages0} />
  <p>
    {data.partnershipAndFeedback}
  </p>
  <h2 id="academy-enrollment" class="text-center uppercase text-2xl py-6">Academy Enrollment</h2>
  <SecondaryBillboard
  images={billboardImages1} />
  <p>
    {data.academyEnrollment}
  </p>
  <p class="text-neutral-700 text-xs text-center m-4">Last updated on May 30, 2024</p>
  <section class="flex flex-col items-center justify-evenly w-full h-96 p-9">
    <a class="btn flex variant-filled text-wrap bg-primary-700 text-lg uppercase p-6 space-x-4 min-w-80" href="" on:click={sendEmail}>
      <p>Send us an email</p>
      <Icon name="mail" size="{30}" color="white" />
    </a>
    <a class="btn flex variant-filled text-wrap bg-primary-700 text-lg uppercase p-6 space-x-4 min-w-80" href="" on:click={openWhatsApp}>
      <p>Direct Message</p>
      <Icon name="whatsapp" size="{30}" color="white" />
    </a>
  </section>
</section>

{/if}

<style>
  li {
    padding: 10px;
    margin: 25px 0 25px 0;
  }
</style>