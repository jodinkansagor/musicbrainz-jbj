import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecordingsList from '../components/recordings/RecordingsList';
import getRecordings from '../components/services/getRecordings';
import styles from './Recordings.css';

const Recordings = ({ match }) => {
  const [recordingsArray, setRecordingsArray] = useState([]);

  useEffect(() => {
    getRecordings(match.params.albumId)
      .then(receivedRecordingsArray => setRecordingsArray(receivedRecordingsArray));
  }, []);

  return (
    <section className={styles.RecordingsContainer}>
      <RecordingsList recordingsArray={recordingsArray} artistName={match.params.artistName} />
    </section>);
};

Recordings.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      albumId: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    })
  }).isRequired
};

export default Recordings;
