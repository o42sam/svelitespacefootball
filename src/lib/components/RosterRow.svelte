<script context="module">
  import Avatar from './Avatar.svelte';
</script>

<script>
  export let photoSrc;
  export let name;
  export let position;
  export let height;
  export let href;
  export let level;
</script>

<a {href} class="default-row">
  <Avatar src={photoSrc} />
  <p class="name">{name}</p>
  <p class="position">{position}</p>
  <p class="height">{height}</p>
  <span class="level">{level}</span>
</a>

<style>
  .default-row {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 15px;
    border-right: 4px solid green;
    color: inherit;
    text-decoration: none;
    transition: box-shadow .1s ease-in, transform .1s ease-in;
  }

  .default-row:hover {
    box-shadow: -.3px .6px 2px .5px #bbb;
    transform: scale(1.005);
    border-right: 0;
  }
</style>