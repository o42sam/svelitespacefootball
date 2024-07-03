<script context="module">
  import Page from '../../../lib/components/Page.svelte'
</script>
<script>
  export let data;

  const [ enrollmentP, enrollmentLi ] = data.enrollment.split("<li>");
  const [ eligibilityP, eligibilityLi ] = data.eligibility.split("<li>");
  const [ guidelinesP, guidelinesLi ] = data.guidelines.split("<li>");
</script>

<Page>
  <h2 id="overview">Overview</h2> 
  <p>
    {enrollmentP}
  </p>
  <ul>
    {#each enrollmentLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <h2 id="eligibility">Eligibility</h2>
  <p>
    {eligibilityP}
  </p>
  <ul>
    {#each eligibilityLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
  <h2 id="guidelines">Guidelines</h2>
  <p>
    {guidelinesP}
  </p>
  <ul>
    {#each guidelinesLi.split("\r") as item, index (index)}
      <li>{item}</li>
    {/each}
  </ul>
</Page>

<style>
    h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
    padding-top: 100px;
  }
</style>