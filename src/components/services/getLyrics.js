export const getLyrics = (artistName, recordingTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${recordingTitle}`)
    .then(res => res.json())
    .then(({ lyrics }) => lyrics);
};
