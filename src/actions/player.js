import { fetchPlayer } from "../api/player";

export default class PlayerActions {

  static async get(alias) {
    const resData = await fetchPlayer(alias)

    const player = resData.player

    return player
  }
}
