import React from 'react';
import { useEffect, useState } from 'react';
import { getLyrics } from '../services/getLyrics';
import PropTypes from 'prop-types';
import styles from './Lyrics.css';

function Lyrics({ match }) {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    getLyrics(match.params.artistName, match.params.recordingTitle)
      .then(receivedLyrics => setLyrics(receivedLyrics));
  });

  return (
    <section className={styles.LyricsContainer}>
      <h1>Lyrics: </h1>
      <p>{lyrics || 'No lyrics were found for this track'}</p>  
    </section>
  );
}

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recordingTitle: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    })
  }).isRequired
};


export default Lyrics;
