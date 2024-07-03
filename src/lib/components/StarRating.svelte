<script>
  export let numOfStars = 0

  const maxStars = 5
</script>

<div class="container">
  {#each Array(numOfStars) as star, index (index)}
  <img src="/src/lib/static/full-star.png" alt="">
  {/each}
  {#each Array(maxStars - numOfStars) as star, index (index)}
  <img src="/src/lib/static/empty-star.png" alt="">
  {/each}
</div>

<style>
  .container {
    display: flex;
    align-items: center;
  }

  img {
    height: 40px;
    width: 40px;
  }
</style>