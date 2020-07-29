import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

const defaultProps = {
  width: '24',
  height: '24',
  color: '#137E6E',
};

const FlipArrowsSvg = ({ width, height, color }) => (
  <svg width={width} height={height} viewBox="0 0 24 25" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7777 5.89941L16.9999 8.12162L14.7777 10.3438" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.2222 8.12109L16.9999 8.12109" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.22221 18.1212L7 15.899L9.22221 13.6768" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.7777 15.8984L7 15.8984" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

FlipArrowsSvg.propTypes = propTypes;
FlipArrowsSvg.defaultProps = defaultProps;

export default FlipArrowsSvg;
