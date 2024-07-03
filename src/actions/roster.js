import { fetchRoster, addPlayer, searchPlayers } from "../api/roster.js"
import { accessStore } from "../stores/roster.js"

export default class RosterActions {

  static async getRoster() {
    const resData = await fetchRoster()
    const roster = resData.roster

    const { set } = accessStore()
    set(roster)
  }

  static async addPlayer(player) {
    const resData = await addPlayer(player)

    this.get()
  }

  static async getSearchSuggestions(searchQuery) {
    const resData = await searchPlayers(searchQuery, true)

    const suggestions = resData.suggestions

    return suggestions
  }

  static async getSearchResults(searchQuery) {
    const resData = await searchPlayers(searchQuery)

    const results = resData.searchResults

    return results
  }
}