import { useState, useEffect } from 'react';
import { getArtists } from '../components/services/getArtists';
import getAlbums from '../components/services/getAlbums';

const useArtists = () => {
  const [artistName, setArtist] = useState('');
  const [artistArray, setArtistArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffSet] = useState(0);

  const nameNoSpace = artistName.replace(/\s/g, '-');

  useEffect(() => {
    setLoading(true);
    getArtists(nameNoSpace, offset)
      .then(artistArray => {
        setArtistArray(artistArray);
      })
      .finally(() => setLoading(false));
  }, [offset]);

  const handleChange = ({ target }) => {
    setArtist(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    getArtists(nameNoSpace, offset)
      .then(artistArray => {
        setArtistArray(artistArray);
      })
      .finally(() => setLoading(false));
  };

  const handlePreviousClick = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
    setOffSet(offset - 25);
    getArtists(nameNoSpace, offset)
      .then(artistArray => {
        setArtistArray(artistArray);
      });
    window.scrollTo(0, 0);

  };

  const handleNextClick = () => {

    setCurrentPage(currentPage + 1);
    setOffSet(offset + 25);
    getArtists(nameNoSpace, offset)
      .then(artistArray => {
        setArtistArray(artistArray);
      });
    window.scrollTo(0, 0);


  };

  return { artistArray, artistName, setArtist, handleChange, handleSubmit, loading, currentPage, handleNextClick, handlePreviousClick };
};

export default useArtists;
