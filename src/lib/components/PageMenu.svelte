<script context="module">
</script>
<script>
  export let style
  export let title = ""
  export let menuItems = []
</script>

<ul class="menu" {style}>
  <h3>{title}</h3>
  {#each menuItems as item, index (index)}
  <li><a href={item.href}>{item.name}</a></li>
  {/each}
</ul>

<style>
    .menu {
    position: sticky;
    z-index: 5;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    font-size: 20px;
    font-weight: 400;
    padding: 30px;
    color: green;
    width: 15%;
    height: 450px;
    margin: 0;
  }

  li {
    padding-left: 20px;
    margin-bottom: 30px;
  }

  li a {
    color: inherit;
  }

  ul h3 {
    color: black;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 50px;
    margin-left: 20px;
  }
</style>