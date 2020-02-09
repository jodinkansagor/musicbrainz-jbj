import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const ArtistInput = ({ artistName, onChange, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <input type="text" value={artistName} onChange={onChange} />
    <button>Search!</button>
  </form>
);

ArtistInput.propTypes = {
  artistName: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default ArtistInput;
