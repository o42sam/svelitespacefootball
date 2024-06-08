<script lang="ts">
	import { smallScreen, mediumScreen, largeScreen } from '../../stores/media';
	import { slide, fade } from 'svelte/transition';
	export let actionButtonText;
    let overlayEnabled = false;
</script>

{#if $largeScreen}

<div class="relative flex items-center w-full h-screen bg-gradient-to-b from-neutral-200 via-neutral-200 to-primary-700 justify-center">
	<iframe
	title="Elite Space Football Channel"
	width="1600"
	height="900"
	src="https://www.youtube.com/embed/FU8JnsHjf7U?autoplay=1&controls=0&mute=1"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
  ></iframe>
	<div role="banner" in:fade out:fade class="absolute flex flex-col items-center justify-end bg-transparent hover:bg-black hover:bg-opacity-70 z-10 space-y-9" style="height: 900px; width: 1600px;" on:mouseover={() => overlayEnabled = true} on:focus on:mouseleave={() => overlayEnabled = false}>
		{#if overlayEnabled}
		<a in:slide out:slide class="btn variant-filled bg-red-500 text-white text-2xl w-full rounded-none py-12 uppercase" href="https://youtube.com/@elitespacefootball?si=lf1JAmhOee34ZxHg" id="principal-action-button">
			{actionButtonText}
		</a>
		{/if}
	</div>
</div>

{:else if $mediumScreen}

<div class="flex flex-col items-center justify-center w-full z-10 mt-6">
	<a class="btn variant-filled bg-red-500 text-white text-2xl w-full rounded-none text-wrap py-6" href="https://youtube.com/@elitespacefootball?si=lf1JAmhOee34ZxHg">
		{actionButtonText}
	</a>
</div>

{:else if $smallScreen}

<div class="flex flex-col items-center justify-center w-full z-10 mt-6">
	<a class="btn variant-filled bg-red-500 text-white text-2xl w-full rounded-none text-wrap py-6" href="https://youtube.com/@elitespacefootball?si=lf1JAmhOee34ZxHg">
		{actionButtonText}
	</a>
</div>

{/if}

<style>
</style>