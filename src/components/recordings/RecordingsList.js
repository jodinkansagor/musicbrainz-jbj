import React from 'react';
import PropTypes from 'prop-types';
import RecordingsItem from './RecordingsItem';


const RecordingsList = ({ recordingsArray, artistName }) => {
  const recordings = recordingsArray.map((recording, i) => (

    <li key={i}><RecordingsItem recordingTitle={recording.recordingTitle} artistName={artistName} /></li>

  ));

  return (
    <>
      <section>
        <h1>Tracks:</h1>
        <ul>
          {recordings}
        </ul>
      </section>
    </>
  );
};

RecordingsList.propTypes = {
  recordingsArray: PropTypes.array.isRequired,
  artistName: PropTypes.string.isRequired
};

export default RecordingsList;
