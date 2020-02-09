import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import ArtistInput from '../components/artist/Form';
import styles from './Artist.css';
import useArtists from '../hooks/artistHook';
import Paging from '../components/paging/Paging';
import If from '../components/conditionals/If';

const Artist = () => {
  const { artistName, handleChange, handleSubmit, artistArray, currentPage, handlePreviousClick, handleNextClick } = useArtists();

  return (
    <section className={styles.Container}>
      <ArtistInput className={styles.input} artistName={artistName} onChange={handleChange} onSubmit={handleSubmit} />
      <ArtistList artistArray={artistArray} artistName={artistName} />
      <If condition={artistArray.length > 0}>
        <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
      </If>
    </section>
  );
};

export default Artist;
