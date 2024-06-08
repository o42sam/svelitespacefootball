<script lang="ts">
    import { getRandomInt } from "$lib/utils";
    import { largeScreen, mediumScreen, smallScreen } from "../../stores/media";
    import { slide, fade, scale, fly } from "svelte/transition";

    export let images: Array<string>
    export let heightClass: string = "h-auto"
    export let widthClass: string = "w-auto"
    export let caption: string | undefined = undefined
    export let description: string | undefined = undefined

    const changeImageTImeout = getRandomInt(3000, 7000)
    let currentImageIdx = 0
    function changeImage() {
        setTimeout(() => {
            currentImageIdx = (currentImageIdx + 1) % images.length
            changeImage()
        }, changeImageTImeout)
    }

    if (images.length > 1) {
        changeImage()
    }
</script>

{#if $smallScreen || $mediumScreen}
<div class="flex flex-col text-sm py-6 relative z-0">
    <div class="{`flex ${heightClass} ${widthClass}`}">
        {#key currentImageIdx}
        <img src="{images[currentImageIdx]}" alt="" class="object-contain flex-auto">
        {/key}
    </div>
    <div class="flex flex-col items-center justify-around {caption ? "p-2": ""}">
    {#if caption}
    <p class="text-neutral-400">{caption}</p>
    {/if}
    {#if description}
    <p class="font-thin">{description}</p>
    {/if}
    </div>    
</div>
{:else if $largeScreen}
<div class="flex flex-col text-sm py-9 relative z-0">
    <div class="{`${images.length > 1 ? "grid grid-flow-row grid-cols-2 gap-2" : "flex"} ${heightClass} ${widthClass}`}">
        {#if images.length > 1}
        {#each images as image, index (index)}
        <img src="{image}" alt="" class="h-72 object-contain flex-auto">
        {/each}
        {:else if images.length === 1}
        <img src="{images[0]}" alt="" class="h-96 object-contain flex-auto">
        {/if}
    </div>
    <div class="flex flex-col items-center justify-around {caption ? "p-2": ""}">
    {#if caption}
    <p class="text-neutral-400">{caption}</p>
    {/if}
    {#if description}
    <p class="font-thin">{description}</p>
    {/if}
    </div>    
</div>
{/if}

<style>
    /* @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    img {
        animation: fadeIn .3s ease-in;
    } */
</style>