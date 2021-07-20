// Below is if we don't write individual actions/axios requests for Users and just get user's playlists through looking up playlists  

import axios from 'axios';

// export const createPlaylist = (playlist) => {
//   return axios.post(`/api/playlists`)
// }

export const getPlaylists = () => {
  return axios.get('/api/playlists')
};


export const getUserPlaylists = id => {

  return axios.get(`/api/playlists/user/${id}`)
};

// export const del

// OR

// export const getPlaylist = playlistId => {
//   return axios.get(`/api/playlists/${playlistId}`)
// };

//and then have some sort of association tying the playlist to the user...

