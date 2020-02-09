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
      <If condition={artistArray.length === 0}>
        <section className={styles.image}>
          <img src="https://i.pinimg.com/originals/69/05/ac/6905acb4cc2ad562cf0ebb79366bbf74.jpg" />
        </section>
      </If>
      <ArtistList artistArray={artistArray} artistName={artistName} />
      <If condition={artistArray.length > 0}>
        <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
      </If>
    </section>
  );
};

export default Artist;
