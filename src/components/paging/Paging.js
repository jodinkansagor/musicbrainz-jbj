import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ currentPage, handleNextClick, handlePreviousClick }) => (
  <>
    <button onClick={handlePreviousClick}>&lt;</button>
    <span>Page {currentPage}</span>
    <button onClick={handleNextClick}>&gt;</button>
  </>
);

Paging.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired
};

export default Paging;
