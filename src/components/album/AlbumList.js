import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';
import styles from '../../containers/Album.css';

const AlbumList = ({ albumArray, artistName }) => {

  const albumElements = albumArray.map((album, i) => (
    <li key={i}>
      <AlbumItem albumId={album.albumId} albumTitle={album.albumTitle} artistName={artistName} />
    </li>
  ));

  return (
    <section className={styles.AlbumContainer}>
      <h1>Albums: </h1>
      <ul className={styles.Albums}>
        {albumElements}
      </ul>
    </section>
  );
};

AlbumList.propTypes = {
  albumArray: PropTypes.array.isRequired,
  artistName: PropTypes.string.isRequired
}

export default AlbumList;
