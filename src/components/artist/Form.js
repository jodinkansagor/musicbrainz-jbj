import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const ArtistInput = ({ artistName, setArtist, onSubmit }) => (
  <form className={styles.form}>
    <input type="text" value={artistName} onChange={({ target }) => setArtist(target.value)} />
    <button onSubmit={onSubmit}>Seach!</button>
  </form>
);

ArtistInput.propTypes = {
  artistName: PropTypes.string,
  setArtist: PropTypes.func,
  onSubmit: PropTypes.func
};

export default ArtistInput;