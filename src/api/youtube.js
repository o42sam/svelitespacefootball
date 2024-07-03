import axios from 'axios'

const API_KEY = 'AIzaSyAlvxFSpLqXgang4gt4OdCVywl0W5l20Gc'
const CHANNEL_ID = 'UChj8wh3azJ8RoFCI0xtS4Lg'


export const fetchPlaylist = async (playlistTitle) => {
  try {
    const channelPlaylistsResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        key: API_KEY,
        channelId: CHANNEL_ID,
        maxResults: '50',
        part: 'snippet',
      },
    });

    const channelPlaylists = channelPlaylistsResponse.data.items;

    const playlist = channelPlaylists.find((item) => item.snippet.title === playlistTitle);

    if (!playlist) {
      throw new Error('Playlist not found');
    }

    const playlistId = playlist.id;

    const playlistItemsResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        key: API_KEY,
        playlistId: playlistId,
        maxResults: '1',
        part: 'snippet',
      },
    });

    const playlistItems = playlistItemsResponse.data.items;

    const videos = playlistItems.map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
    }));

    return { videos, playlistId }
  } catch (error) {
    console.log('Error fetching playlist:', error.message);
    return { videos: [], playlistId: "" };
  }
};