import RosterActions from "../../../actions/roster.js"
import { accessStore } from "../../../stores/roster.js"

export async function load() {

  await RosterActions.getRoster()

  const { subscribe } = accessStore()
  
  let currentRoster
  subscribe(state => {
      currentRoster = state
    })

  return({
    rosterTitle: currentRoster.name.toLowerCase().includes("roster")? currentRoster.name : `${currentRoster.name} Roster`,
    players: currentRoster.players
  })
}