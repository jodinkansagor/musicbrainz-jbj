import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ currentPage, handleNextClick, handlePreviousClick }) => (
  <section className={styles.Button}>
    <button onClick={handlePreviousClick}>Previous</button>
    <span>Page {currentPage}</span>
    <button onClick={handleNextClick}>Next</button>
  </section>
);

Paging.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired
};

export default Paging;
