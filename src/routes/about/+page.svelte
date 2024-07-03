<script context="module">
  import Page from '../../lib/components/Page.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
</script>
<script>
  export let data;

  const introParts = data.intro.split("\r");
  const mainParts = data.main.split("\r");
  const [ quote, author ] = data.quotes.split("\r");
  
  export const load = async () => {
    const data = {
      pageMenuLeft: {
      title: "About",
      position: "left",
      items: [
        { name: "Overview", href: "#overview" },
        { name: "The Academy", href: "#the-academy" },
      ]}
    }    
  }

  const dispatch = createEventDispatcher()

  onMount(() => {})
</script>

<Page>
  <h2 id="overview">Overview</h2>
  <p>{introParts[0]}</p>
  <ul>
    {#each data.objectives as objective, index (index)}
      <li>{objective}</li>
    {/each}
  </ul>
  <p>{introParts[1]}</p>
  <h2 id="the-academy">The Academy</h2>
  <div class="mission-statement">
    <p class="quote">{data.missionStatement}</p>
    <p class="author">- The Elite Space Football Family</p>
  </div>
  <p>{mainParts[0]}</p>
  <div>
    <p class="quote">{quote}</p>
    <p class="author">- {author}</p>
  </div>
  <p>{mainParts[1]}</p>
</Page>

<style>
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
    padding-top: 100px;
  }

  .mission-statement {
    background-color: green;
    color: white;
    width: 85%;
    margin-bottom: 50px;
    padding: 70px;
    border-radius: 50px;
    line-height: 2;
    text-align: center;
    transition: transform .1s ease-in;
  }

  .mission-statement:hover {
    box-shadow: -1px 2px 3px 1px #aaa;
    transform: scale(1.01);
  }

  .quote {
    font-weight: 600;
    font-size: 25px;
  }

  .author {
    font-weight: 300;
    font-size: 25px;
    text-align: center;
  }
</style>