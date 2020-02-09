import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const RecordingsItem = ({ recordingTitle, artistName }) => {
  return (
    <Link to={`/lyrics/${artistName}/${recordingTitle}`}>
      <p>{recordingTitle}</p>
    </Link>
  );
};

RecordingsItem.propTypes = {
  recordingTitle: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default RecordingsItem;
