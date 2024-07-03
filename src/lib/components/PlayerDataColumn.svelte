<script>
  export let columnName;
  export let columnValue;
  export let style;

  // Splitting column value
  const maxLength = 20;
  
  let displayedColumnValue = "";

  if (columnValue.length >  maxLength) {

  }
</script>

<div class="container" {style}>
  <h3 class="column-name">
    {columnName}
  </h3>
  {#if typeof columnValue === "string" || typeof columnValue === "date"}
  <p class="column-value">
    {columnValue}
  </p>
  {:else}
  <slot/>
  {/if}
</div>

<style>
  .container {
    padding: 20px;
    font-size: 20px;
    color: #222;
  }
</style>