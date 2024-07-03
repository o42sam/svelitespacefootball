<script>
  export let variant = "default"
  export let style
</script>

<section class={variant} {style}>
  <slot />
</section>

<style>
  .default {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px;
    padding-top: 0px;
    background-color: white;
    width: 65%;
    align-self: center;
    font-size: 22px;
    line-height: 1.6;
    border-top: 2px solid green;
  }
</style>