import React, { useEffect, useState } from 'react';
import AlbumList from '../components/album/AlbumList';
import PropTypes from 'prop-types';
import getAlbums from '../components/services/getAlbums';
import Paging from '../components/paging/Paging';
import styles from './Album.css';
import If from '../components/conditionals/If';

const Albums = ({ match }) => {
  const [albumArray, setAlbumArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffSet] = useState(0);

  const handlePreviousClick = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
    setOffSet(offset - 25);
    getAlbums(match.params.artistId, offset)
      .then(albumArray => {
        setAlbumArray(albumArray);
      });
    window.scrollTo(0, 0);

  };

  const handleNextClick = () => {

    setCurrentPage(currentPage + 1);
    setOffSet(offset + 25);
    getAlbums(match.params.artistId, offset)
      .then(albumArray => {
        setAlbumArray(albumArray);
      });
    window.scrollTo(0, 0);

  };

  useEffect(() => {
    getAlbums(match.params.artistId, offset)
      .then(receivedAlbumArray => {
        setAlbumArray(receivedAlbumArray);
      });
  }, [offset]);

  return (
    <section className={styles.AlbumContainer}>
      <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
      <AlbumList albumArray={albumArray} artistId={match.params.artistId} artistName={match.params.artistName} />
      <If condition={albumArray.length === 0}>
        <h3>There are no albums listed for this artist.</h3>
      </If>
      <If condition={albumArray.length > 0}>
        <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
      </If>
    </section>
  );
};

Albums.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistId: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    })
  }).isRequired
};


export default Albums;
