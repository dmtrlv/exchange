import React from 'react';
import PropTypes from 'prop-types';

import { HeadingWrapper } from './styled';

const propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: undefined,
};

const Heading = ({ content, className }) => (
  <HeadingWrapper className={className}>
    <h1 className="title">{content}</h1>
  </HeadingWrapper>
);

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
