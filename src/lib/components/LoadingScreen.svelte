<script lang="ts">
    import { smallScreen, mediumScreen, largeScreen } from "../../stores/media";
    import logo from "$lib/img/core/logo.png"

    import { ProgressBar } from "@skeletonlabs/skeleton";
</script>

{#if $largeScreen}

<div class="fixed w-full h-full z-50 top-0 left-0">
    <ProgressBar value={undefined} meter="bg-primary-700 bg-opacity-30" track="bg-lime-200" />
    <div class="w-full h-full bg-neutral-200 flex items-center justify-center">
        <img src="{logo}" alt="" class="h-8 animate-pulse duration-75 animate-bounce ease-in-out infinite">
    </div>
</div>

{:else if $smallScreen || $mediumScreen}

<div class="fixed w-full h-full z-50 top-0 left-0">
    <ProgressBar value={undefined} meter="bg-primary-700 bg-opacity-30" track="bg-lime-200" />
    <div class="w-full h-full bg-neutral-200 flex items-center justify-center">
        <img src="{logo}" alt="" class="h-6 animate-pulse duration-75 animate-bounce ease-in-out infinite">
    </div>
</div>
{/if}