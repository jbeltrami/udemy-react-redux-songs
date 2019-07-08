// Action Selector
export const selectSong = song =>
  // Return an action
  ({
    type: 'SONG_SELECTED',
    payload: song,
  });
