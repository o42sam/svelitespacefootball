<script lang="ts">
	import { smallScreen, mediumScreen, largeScreen } from '../../stores/media';
	import { currentLanguage } from '../../stores/language';
    import { slide, fade, scale, fly } from "svelte/transition";

	import img0 from "$lib/img/bg/0.jpg";
	import img1 from "$lib/img/bg/1.jpg";
	import img2 from "$lib/img/bg/2.jpg";

	let contentIdx = 0;
	let billboardbgs = [img0, img1, img2];
	export let billboardContent;
	export let expandText;
  
	function switchContent() {
	  setTimeout(() => {
		contentIdx = (contentIdx + 1) % billboardbgs.length;
		switchContent();
	  }, 6000);
	}
  
	switchContent();
</script>
  
{#if $largeScreen}

<div
in:fade
style="background-image: url('{billboardbgs[contentIdx]}'); background-size: cover; background-position: center; width: 100%; height: 100vh;"
>
	<div
	in:fade
		class="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white space-y-4"
	>
		<h2 class="uppercase text-4xl">{billboardContent[contentIdx].title}</h2>
		{#key contentIdx}
		<p class="text-2xl w-3/5 text-center" id="body-text">{billboardContent[contentIdx].body}</p>
		{/key}
		<a href="{$currentLanguage.trim()}/about#the-academy" class="btn variant-filled bg-primary-700 text-2xl font-thin">
		{expandText}
		</a>
	</div>
</div>

{:else if $mediumScreen}

<div
in:fade
style="background-image: url('{billboardbgs[contentIdx]}'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 100%; height: 600px;"
>
	<div
	in:fade
	class="w-full h-full bg-black bg-opacity-70 flex flex-col items-center p-4 justify-center text-white space-y-3"
	>
		<h2 class="uppercase text-xl text-center">{billboardContent[contentIdx].title}</h2>
		{#key contentIdx}
		<p class="text-lg w-full text-center" id="body-text">{billboardContent[contentIdx].body}</p>
		{/key}
		<a href="/about#the-academy" class="btn variant-filled bg-primary-700 text-lg font-thin">
		{expandText}
		</a>
	</div>
</div>

{:else if $smallScreen}

<div
in:fade
style="background-image: url('{billboardbgs[contentIdx]}'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 100%; height: 400px; margin-top: 70px;"
>
	<div
	in:fade
	class="w-full h-full bg-black bg-opacity-70 flex flex-col items-center p-4 justify-center text-white space-y-3"
	>
		<h2 class="uppercase text-xl text-center">{billboardContent[contentIdx].title}</h2>
		{#key contentIdx}
		<p class="text-lg w-full text-center" id="body-text">{billboardContent[contentIdx].body}</p>
		{/key}
		<a href="{$currentLanguage.trim()}/about#the-academy" class="btn variant-filled bg-primary-700 text-lg font-thin">
		{expandText}
		</a>
	</div>
</div>

{/if}

<style>
	@keyframes slideDownFade {
		0% {
			top: -30px;
			opacity: 0;
		}
		100% {
			top: 0px;
			opacity: 1;
		}
	}

	#body-text {
		position: relative;
		animation: slideDownFade .5s ease-in;
	}
</style>