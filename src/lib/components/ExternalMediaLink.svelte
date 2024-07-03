<script>
  export let link;
</script>

<a href={link.url}>
  <img src={link.logoSrc} alt={link.altText} />
  <h3>{link.handle}</h3>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
    text-decoration: none;
  }
</style>