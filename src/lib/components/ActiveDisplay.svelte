<script context="module">
  import YouTube from "svelte-youtube";
  import Button from "./Button.svelte";
</script>

<script>
  export let style;
  export let actionButtons;
  export let src;

  let overlayEnabled = false;
  let videoId = src;

  const opts = {
    width: 1280,
    height: 720,
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 0,
      mute: 1,
    },
  }
</script>

<div class="video-player-container" {style}>
  <YouTube {videoId} options={opts} />
  <div class="video-player-overlay" on:mouseover={() => overlayEnabled = true} on:focus on:mouseleave={() => {overlayEnabled = false}}>
    {#if overlayEnabled}
      {#each actionButtons as actionButton, index (index)}
        <Button style={actionButton.style} on:click={() => window.location = actionButton.href}>
          {actionButton.text}
        </Button>
      {/each}
    {/if}
  </div>
</div>

<style>
  .video-player-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 720px;
    /* background-color: #cbff99; */
    background-color: green;
  }

  .video-player-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: inherit;
    width: inherit;
    transition: background-color .2s ease-in;
  }

  .video-player-overlay:hover {
    background-color: rgba(0, 0, 0, .4);
  }
</style>