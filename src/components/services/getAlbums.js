const getAlbums = (artistId, offset) => {
  return fetch(`https://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&offset=${offset}`)
    .then(res => res.json())
    .then(({ releases }) => releases.map(release => ({
      albumTitle: release.title,
      albumId: release.id
    })));
};
export default getAlbums;
