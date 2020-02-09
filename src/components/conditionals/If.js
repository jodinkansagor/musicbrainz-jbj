import React from 'react';
import PropTypes from 'prop-types';

const If = ({ children, condition }) => {
  if(!condition) return null;

  return children;
};

If.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool.isRequired
}

export default If;
