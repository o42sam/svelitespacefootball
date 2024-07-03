<script context="module">
  import HeaderGroup from "../lib/components/HeaderGroup.svelte"
  import Billboard from "../lib/components/Billboard.svelte"
  import ActiveDisplay from "../lib/components/ActiveDisplay.svelte"
  import { _base } from "../lib/constants/routes.js"
</script>

<script>
  export let data;

  let mainSectionClassName = "main-content"
</script>

<section class={mainSectionClassName}>
  <HeaderGroup headers={[
    "Looking for football talent?",
    "Find the best at our academy",
    "Ready to compete at the top level"
  ]} />
  <Billboard />
  <ActiveDisplay src={data.videoUrl} actionButtons={[
    {text: "Visit our channel", style: "width: 400px; background-color: red; color: white; font-size: 25px; margin: 20px", href: "https://youtube.com/@elitespacefootball?si=lf1JAmhOee34ZxHg"},
    {text: "See the players", style: "width: 400px; background-color: green; color: white; font-size: 20px; margin: 20px", href: `${_base}/academy/roster/`},
    ]} />
</section>

<style>
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
  }
</style>

