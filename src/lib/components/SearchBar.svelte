<script context="module">
  import RosterActions from "../../actions/roster.js"
</script>
<script>
  export let className;
  export let placeholder;

  let searchQuery = ""
  let suggestions = []
  let inputFocused = false

  async function updateSuggestions(query) {
    if (query.length > 0) {
      suggestions = await RosterActions.getSearchSuggestions(query)
    }
    else {
      suggestions = []
    }
  }

  $: updateSuggestions(searchQuery)

  function handleSearch() {

  }
</script>

<div class="search">
  <form class={className} on:submit|preventDefault={handleSearch}>
    <input type="text" bind:value={searchQuery} name="search-field" id="search-field" {placeholder} on:blur={() => inputFocused = false} on:focus={() => inputFocused = true}/>
    <button type="submit"><img src="" alt="Search"></button>
  </form>
  {#if suggestions && inputFocused}
  <ul class="suggestions">
    {#each suggestions as suggestion, index (index)}
    <li><a href="">{suggestion}</a></li>
    {/each}
  </ul>
  {/if}
</div>

<style>
  .search {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-search {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  #search-field {
    all: unset;
    box-sizing: border-box;
    padding: 10px;
    width: 200px;
    border-radius: 10px;
    background-color: white;
    margin-right: 10px;
  }

  #search-field:focus {
    border: 2px solid green;
  }

  button {
    all: unset;
    background-color: green;
    border-radius: 10px;
    color: white;
    padding: 10px;
    font-family: inherit;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    box-shadow: 0px -1px 2px 1px #aaa;
  }

  .suggestions {
    position: absolute;
    z-index: 5;
    list-style: none;
    top: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    background-color: white;
    color: black;
    padding-left: 0px;
    width: 100%;
  }

  .suggestions li {
    padding: 10px;
    width: inherit;
  }

  .suggestions li:hover {
    cursor: pointer;
    background-color: #dedede;
  }

  a {
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }
</style>