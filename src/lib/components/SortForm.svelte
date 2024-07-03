<script>
  let ascending = false;
</script>

<form class="sort-form">
  <div>
    <label id="sort-label" for="sort-metric">Sort Players</label>
    <select name="sort-metric" id="sort-metric">
      <option value="name">Name</option>
      <option value="age">Age</option>
      <option value="height">Height</option>
    </select>
  </div>
  <div>
    <input id="ascending" type="radio" value="ascending" checked={ascending}/>
    <label for="ascending">Ascending</label>
  </div>
  <div>
    <input id="descending" type="radio" value="descending" checked={!ascending} />
    <label for="descending">Descending</label>
  </div>
</form>

<style>
   .sort-form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .sort-form div {
    display: inline-flex;
    align-items: center;
    margin-right: 10px;
  }

  .sort-form select {
    width: 200px;
    padding: 10px;
    font-family: inherit;
    font-weight: bold;
  }

  #sort-label {
    font-weight: bold;
    margin-right: 15px;
  }

  input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid green;
  border-radius: 50%;
  outline: none;
  position: relative;
  background-color: white;
}

input[type="radio"]:checked {
  border-color: green;
}

input[type="radio"]:checked::before {
  content: '\2022';
  color: green;
  text-align: center;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-55%, -55%);
}
</style>