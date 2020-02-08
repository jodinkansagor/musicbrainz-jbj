import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import ArtistInput from '../components/artist/Form';
import styles from './ArtistContainer.css';
import useArtists from '../hooks/artistHook';
import Paging from '../components/paging/Paging';
// import If from '../components/conditionals/If';

const Artist = () => {
  const { artistName, handleChange, handleSubmit, artistArray, currentPage, handlePreviousClick, handleNextClick } = useArtists();

  return (
    <section className={styles.Container}>
      <ArtistInput artistName={artistName} onChange={handleChange} onSubmit={handleSubmit} />
      <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
      <ArtistList artistArray={artistArray} artistName={artistName} />
      <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
    </section>
  );
};

export default Artist;
