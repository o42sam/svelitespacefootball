<script lang="ts">
	import { smallScreen, mediumScreen, largeScreen } from '../../stores/media';

	import Icon from "$lib/components/Icon.svelte";

	import Billboard from "$lib/components/Billboard.svelte";
	import VideoPlayer from "$lib/components/VideoPlayer.svelte";

	import img5 from "$lib/img/other/5.png";
	import img10 from "$lib/img/other/10.png";
	import img11 from "$lib/img/other/11.png";
	import img8 from "$lib/img/other/8.png";
	import img13 from "$lib/img/other/13.png";
	import img9 from "$lib/img/other/9.png";
	import img0 from "$lib/img/other/0.png";
	import img1 from "$lib/img/other/1.png";
	import img2 from "$lib/img/other/2.png";
	import newBg2 from "$lib/img/bg/new-bg-2.png"
	import logo from "$lib/img/core/logo.png"

	let headerIdx = 0
	let headers = [
		"Looking for football talent?",
		"Find the best at our academy",
		"Ready to compete at the top level",
	]
	let objectivesContent = [
		{
			text: "Finding and pooling together talented young footballers to put through periods of training and evaluation, organizing and playing matches against amateur and professional opposition.",
			imgs: [img5, img10, img11]
		},
		{
			text: "Documenting and presenting top match moments of prospective players to the public as video content through various content creation and presentation media.",
			imgs: [img8, img13, img9]
		},
		{
			text: "Enabling the transfer of prospective players to various footballing leagues the world over with the help of our partners.",
			imgs: [img0, img1, img2]
		},
	]
	const billboardText = [
		{
		  title: 'We have created an environment for winners',
		  body: 'With an academy allowing no room for indiscipline or complacency, always demanding 100% we believe that we can enable the development of a cultured group of driven, talented young players as a collective.',
		},
		{
		  title: 'Building the next African superstar',
		  body: 'From a trove of amatuer teenage talent we aim to get the best by putting them through rigorous training and evaluation, preparing them for top performance on the global stage through our seasoned team of instructors and trainers.',
		},
		{
		  title: 'Discover them now',
		  body: 'Our scouting network of highly experienced talent talent finders spans the entire country and is constantly growing, with the aim to find talented youngsters nationwide with a dedication to football as early as possible',
		},
	]
	let showBillboard = false

	function displayBillboard() {
		setTimeout(() => {
			showBillboard = true
		}, 1000)
	}

	displayBillboard()

	let currentObjectivesImgIdx = 0
	function changeObjectivesImgIdx() {
		setTimeout(() => {
			currentObjectivesImgIdx = (currentObjectivesImgIdx + 1) % objectivesContent[0].imgs.length
			changeObjectivesImgIdx()
		}, 5000)
	}

	changeObjectivesImgIdx()
</script>


<svelte:head>
	<title>Elite Space Football Home</title>
	<meta name="description" content="Discover the best that African amateur football has to offer as we find and train the most talented teenage players, and collect their best footballing moments, and facilitate their ascension to the global stage." />
	<meta name="keywords" content="homepage, home page, elite, elite space, elite space football, football, talent" />
	
	<meta property="og:title" content="Elite Space Football | Home">
	<meta property="og:description" content="Discover the best that African amateur football has to offer as we find and train the most talented teenage players, and collect their best footballing moments, and facilitate their ascension to the global stage.">
	<meta property="og:image" content="{logo}">
	<meta property="og:url" content="https://elitespacefootball.com">
	<meta property="og:type" content="website">
</svelte:head>
{#if $largeScreen}

<section class="min-h-screen">
	<h1 class="text-center uppercase text-primary-700 bg-lime-200 p-9 text-3xl mt-32">
		{headers[headerIdx]}
	</h1>
	{#if showBillboard}
	<Billboard
	expandText="Learn more"
	billboardContent={billboardText} />
	{/if}
</section>

<section
class="w-full flex flex-col items-center justify-evenly text-2xl space-y-10 p-20 text-primary-700 font-medium bg-gradient-to-b from-neutral-200 via-neutral-200 to-primary-700"
style="background-image: url('{newBg2}'); background-size:contain; background-repeat: no-repeat; background-position: center;">
	<h1 class="uppercase text-3xl">
	{"— What we do —"}
	</h1>
	{#each objectivesContent as content, index (index)}
	<section
	class="flex w-2/3 items-center justify-center text-2xl space-x-4 relative" id="objectives-content">
		{#if index % 2 === 0}
		<span class="flex flex-col items-center justify-center space-y-6 h-80">	
			<p class="text-center w-2/3">{content.text}</p>
			{#if index === 0}
			<Icon name="eye" size="{60}" color="rgb(11,140,97)" />
			{:else if index === 1}
			<Icon name="video-camera" size="{60}" color="rgb(11,140,97)" />
			{:else if index === 2}
			<Icon name="sphere" size="{60}" color="rgb(11,140,97)" />
			{/if}
		</span>
		{#key currentObjectivesImgIdx}
		<img src="{content.imgs[currentObjectivesImgIdx]}" alt="Content {index}" class="w-1/4 slide-right" />
		{/key}
		{:else}
		{#key currentObjectivesImgIdx}
		<img src="{content.imgs[currentObjectivesImgIdx]}" alt="Content {index}" class="w-1/4 slide-left" />
		{/key}
		<span class="flex flex-col items-center justify-center space-y-6 text-black">	
			<p class="text-center w-2/3">{content.text}</p>
			{#if index === 0}
			<Icon name="eye" size="{60}" color="black" />
			{:else if index === 1}
			<Icon name="video-camera" size="{60}" color="black" />
			{:else if index === 2}
			<Icon name="sphere" size="{60}" color="black" />
			{/if}
		</span>
		{/if}
	</section>
	{/each}
</section>
<section class="flex flex-col items-center justify-center">
	<h1 class="uppercase text-3xl text-center text-primary-700 my-16">
		{"— Our channel —"}
	</h1>
	<VideoPlayer
	actionButtonText="Visit Our Channel" />
</section>

{:else if $mediumScreen}

<Billboard
expandText="Learn more"
billboardContent={billboardText} />
<section
class="w-full flex flex-col items-center justify-evenly text-2xl space-y-12 mt-4 p-6 text-primary-700 font-normal">
	<h1 class="uppercase text-3xl mt-4">
	{"What we do"}
	</h1>
	{#each objectivesContent as content, index (index)}
	<section
	class="flex w-full items-center justify-center space-x-4" id="objectives-content">
		{#if index % 2 === 0}
		<span class="flex flex-col items-center justify-center space-y-6 h-80 p-6">	
			<p class="text-center w-full">{content.text}</p>
			{#if index === 0}
			<Icon name="eye" size="{60}" color="rgb(11,140,97)" />
			{:else if index === 1}
			<Icon name="video-camera" size="{60}" color="rgb(11,140,97)" />
			{:else if index === 2}
			<Icon name="sphere" size="{60}" color="rgb(11,140,97)" />
			{/if}
		</span>
		{:else}
		<span class="flex flex-col items-center justify-center space-y-6 text-black p-6">	
			<p class="text-center w-full">{content.text}</p>
			{#if index === 0}
			<Icon name="eye" size="{60}" color="black" />
			{:else if index === 1}
			<Icon name="video-camera" size="{60}" color="black" />
			{:else if index === 2}
			<Icon name="sphere" size="{60}" color="black" />
			{/if}
		</span>
		{/if}
	</section>
	{/each}
</section>
<VideoPlayer
actionButtonText="Visit Our Channel" />

{:else if $smallScreen}

<Billboard
expandText="Learn more"
billboardContent={billboardText} />
<section
class="w-full flex flex-col items-center justify-evenly text-xl space-y-8 mt-4 text-primary-700 font-normal">
	<h1 class="uppercase text-3xl mt-4">
	{"What we do"}
	</h1>
	{#each objectivesContent as content, index (index)}
	<section
	class="flex w-full items-stretch justify-center space-x-4" id="objectives-content">
		{#if index % 2 === 0}
		<span class="flex flex-col items-center justify-center space-y-6 h-80 p-6">
			<p class="text-center w-full">{content.text}</p>
			{#if index === 0}
			<Icon name="eye" size="{60}" color="rgb(11,140,97)" />
			{:else if index === 1}
			<Icon name="video-camera" size="{60}" color="rgb(11,140,97)" />
			{:else if index === 2}
			<Icon name="sphere" size="{60}" color="rgb(11,140,97)" />
			{/if}
		</span>
		{:else}
		<span class="flex flex-col items-center justify-center space-y-6 bg-lime-200 text-black h-96 w-full p-6">	
			<p class="text-center w-full">{content.text}</p>
			{#if index === 0}
			<Icon name="eye" size="{60}" color="black" />
			{:else if index === 1}
			<Icon name="video-camera" size="{60}" color="black" />
			{:else if index === 2}
			<Icon name="sphere" size="{60}" color="black" />
			{/if}
		</span>
		{/if}
	</section>
	{/each}
</section>

<VideoPlayer 
actionButtonText="Visit Our Channel" />
{/if}

<style>
	@keyframes slideLeftFade {
		0% {
			left: 40px;
			opacity: 0;
		}
		100% {
			left: 0px;
			opacity: 1;
		}
	}

	@keyframes slideRightFade {
		0% {
			left: -40px;
			opacity: 0;
		}
		100% {
			left: 0px;
			opacity: 1;
		}
	}

	#objectives-content img {
		position: relative;
	}

	.slide-left {
		animation: slideLeftFade .5s ease-in;
	}

	.slide-right {
		animation: slideRightFade .5s ease-in;
	}
</style>