import axios from "axios"
import { _baseUrl } from "./endpoints"

export async function fetchPlayer(alias) {

  const options = {
    url: `${_baseUrl}/academy/players/${alias}`
  }

  try {
    const res = await axios.get(options.url, options)

    const data = await res.data

    return data
  }
  catch(err) {
    console.log(err)
  }
}