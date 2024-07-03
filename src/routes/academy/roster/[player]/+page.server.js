import { accessStore } from '../../../../stores/roster.js'
import PlayerActions from '../../../../actions/player.js'
import { fetchPlaylist } from "../../../../api/youtube.js"

export async function load({ params }) {

  const { subscribe } = accessStore()
  
  let players
  subscribe(state => {
    players = state.players
  })

  let player
  if(players.length) {
    player = players.find(player => player.alias === params.player)
  }
  else{
    player = await PlayerActions.get(params.player)
  }

  let focusVideo
  let listId

  if (player.class.spotlight) {
    const { videos, playlistId } = await fetchPlaylist(`${player.bio.firstName} ${player.bio.lastName}`.toUpperCase())
    listId = playlistId
    focusVideo = videos[0]
  }
  else {
    focusVideo = ""
    listId = ""
  }

  return({
    player,
    focusVideo,
    listId,
  })
}