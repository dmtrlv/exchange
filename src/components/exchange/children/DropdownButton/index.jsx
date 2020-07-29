/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from '../InlineSVG';

import { DropDownWrapper } from './styled';

const propTypes = {
  selectedItem: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

const defaultProps = {
  selectedItem: {},
  onClick: () => {},
};

const DropDownComponent = ({ selectedItem, onClick }) => (
  <DropDownWrapper>
    <div className="label-container" onClick={onClick}>
      <InlineSVG url={selectedItem.image} />
      <div className="label">{selectedItem.ticker}</div>
    </div>
  </DropDownWrapper>
);

DropDownComponent.propTypes = propTypes;
DropDownComponent.defaultProps = defaultProps;

export default DropDownComponent;
