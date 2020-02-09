const getRecordings = albumId => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res => res.json())
    .then(({ recordings }) => recordings.map(recording => ({
      recordingTitle: recording.title.replace(/\s/g, '-')
    })));
};

export default getRecordings;
