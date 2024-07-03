import { writable } from "svelte/store"

const store = writable({})

export function accessStore() {
  const { subscribe, update, set } = store
  
  return({
    subscribe,
    update,
    set
  })
} 