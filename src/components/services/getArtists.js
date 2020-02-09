export const getArtists = (artistName, offset) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(({ artists }) => artists.map(artist => ({
      artistName: artist.name.replace(/\s/g, '-'),
      artistId: artist.id
    })));
};
