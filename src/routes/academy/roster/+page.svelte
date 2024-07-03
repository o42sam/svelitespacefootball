<script context="module">
  import RosterRow from "../../../lib/components/RosterRow.svelte"
  import SortForm from "../../../lib/components/SortForm.svelte"
  import Button from "../../../lib/components/Button.svelte"
</script>

<script>
  export let data

  let headerClassName = "header-default"
  let mainClassName = "main-default"
  let footerClassName = "footer-default"
</script>

<section class="roster">
  <header class={headerClassName}>
    <h1>{data.rosterTitle}</h1>
    <SortForm />
  </header>
  <main class={mainClassName}>
    {#each data.players as player, index (index)}
      <RosterRow href="/academy/roster/{player.alias}" name={`${player.bio.firstName} ${player.bio.lastName}`} level={player.class}/>
    {/each}
  </main>
  <footer class={footerClassName}>
    <div class="page-nav">
      <Button style="padding: 20px; color: white; background-color: green; font-size: 16px;">Prev</Button>
      <p>Page 1 of 1</p>
      <Button style="padding: 20px; color: white; background-color: green; font-size: 16px;">Next</Button>
    </div>
  </footer>
</section>

<style>
  .roster {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .header-default {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 150px;
    background-color: #cbff99;
    border-bottom: 2px solid green;
  }

  header > h1 {
    font-size: 35px;
    text-transform: uppercase;
    color: green;
  }

  .main-default {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    min-height: 300px;
    width: 70%;
    background-color: white;
    border-bottom: 2px solid green;
  }

  .footer-default {
    padding: 50px;
  }

  .page-nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 400px;
  }

  .page-nav-button {
    width: 100px;
    padding: 10px;
    font-family: inherit;
    font-weight: bold;
  }
</style>