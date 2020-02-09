import React from 'react';
import ArtistItem from './ArtistItem.js';
import PropTypes from 'prop-types';

const ArtistList = ({ artistArray }) => {

  const artistItemElements = artistArray.map(({ artistName, artistId }) => (
    <ArtistItem key={artistId} artistId={artistId} artistName={artistName} />
  ));
  
  return (
    <section>
      <ul>
        {artistItemElements}
      </ul>
    </section>
  );


  
};

ArtistList.propTypes = {
  artistArray: PropTypes.array
};

export default ArtistList;
