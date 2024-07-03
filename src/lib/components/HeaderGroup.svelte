<script context="module">
  import { onMount } from "svelte"
</script>
<script>
  export let style
  export let animated = false
  export let headers = []
  export let headerChangeTimeout = 3000

  let headerCounter = 0

  if (animated) {

  }

  function changeHeader() {
    setTimeout(() => {
      headerCounter < headers.length - 1 ? headerCounter++ : headerCounter = 0

      changeHeader()
    }, headerChangeTimeout)
  }

  onMount(() => changeHeader())
</script>

<h1 {style}>
  {headers[headerCounter]}
</h1>

<style>
  h1 {
    color: green;
    background-color: #cbff99;
    padding: 40px;
    text-transform: uppercase;
    font-size: 50px;
    width: 100%;
    margin: 0;
    text-align: center;
  }
</style>