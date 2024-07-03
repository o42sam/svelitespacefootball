<script>
  export let style;
</script>

<button on:click {style}>
  <slot />
</button>

<style>
  button {
    position: relative;
    overflow: hidden;
    padding: 1%;
    text-align: center;
    font-family: inherit;
    border-radius: 15px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: none;
    outline: none;
    border: none;
    transition: transform .2s ease-in;
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.04);
  }

  button:active::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.25);
    transform: scaleX(0);
    animation: ripple .5s linear;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  @keyframes ripple {
    to {
      transform: scaleX(5);
      opacity: 0;
    }
  }
</style>