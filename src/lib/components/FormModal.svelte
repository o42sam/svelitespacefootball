<script context="module">
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";
</script>
<script>
  export let formConfig
  
  const dispatch = createEventDispatcher()
</script>

<div class="modal-window">
  <form on:submit|preventDefault={() => {}}>
    <div class="header">
      {#if formConfig.name}
      <h1>{formConfig.name}</h1>
      {/if}    
      {#if formConfig.description}
      <p>{formConfig.description}</p>
      {/if}
    </div>
    {#each formConfig.fields as field, index (index)}
    <div>
      <label for={field.id}>{field.label}</label>
      <input type={field.type} name={field.name} id={field.id}>
    </div>   
    {/each}
    {#each formConfig.buttons as button, index (index)}
    <Button type={button.type || ""} style="color: white; background-color: green; width: 60%; font-size: 20px; padding: 10px; height: 50px;">{button.text}</Button>
    {/each}
  </form>
  <Button on:click={() => dispatch("modalClosed")} style="background-color: transparent; color: #cbff99; text-transform: capitalize; font-size: 25px; font-weight: 300;">Close</Button>
</div>

<style>
  .modal-window {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 6;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    animation: fadeIn .1s ease-in;
  }

  .modal-window form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #dedede;
    padding: 50px;
    width: 40%;
    height: 40%;
    border-radius: 30px;
    font-size: 19px;
  }

  .modal-window form > div {
    display: flex;
    flex-direction: column;
    width: 75%;
    font-size: 20px;
  }

  .header h1 {
    margin-bottom: 5px;
  }

  .modal-window form > div label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .modal-window form > div input {
    all: unset;
    border: 2px solid black;
    border-radius: 15px;
    padding: 10px;
    font-size: 18px;
    height: 30px;
    transition: background-color .1s ease-in;
  }

  .modal-window form > div input:focus {
    border: 2px solid green;
    background-color: #cbff99;
  }
  
  @keyframes fadeIn {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, .8);
    }
  }
</style>