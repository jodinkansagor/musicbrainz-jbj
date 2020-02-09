import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtistItem = ({ artistName, artistId }) => (

  <Link to={`/albums/${artistId}/${artistName}`}>
    <li>
      <h1>{artistName}</h1>
    </li>
  </Link>
);

ArtistItem.propTypes = {
  artistName: PropTypes.string,
  artistId: PropTypes.string
};

export default ArtistItem;
