import axios from "axios"
import { _baseUrl } from "./endpoints"

const url = `${_baseUrl}/rosters/main`

export async function fetchRoster() {

  const options = {
    url: `${url}`,
  }

  try {
    const res = await axios.get(options.url, options)

    const data = await res.data

    return data
  }
  catch(err) {
    console.error(err)
  }
}

export async function searchPlayers(query, suggestions, page) {
  
  const options = {
    url: `${url}/search?q=${query}&suggestions=${suggestions}`
  }

  try {
    const res = await axios.get(options.url, options)

    const data = await res.data
    
    return data
  }
  catch(err) {
    console.error(err)
  }
}

export async function addPlayer(player) {

  const options = {
    url: `${url}`,
    body: {
      player
    }
  }

  try {
    const res = await axios.post(options.url, options)

    const data = await res.data

    return data
  }
  catch(err) {
    console.error(err)
  }
}