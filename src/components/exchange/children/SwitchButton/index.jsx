import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from './styled';

// assets
import FlipArrowsSvg from '../InlineSVG/FlipArrowsSVG';

const propTypes = {
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

const SwitchButton = ({ onClick }) => {
  const [isSpin, startSpin] = useState(false);
  return (
    <Button
      type="button"
      onClick={() => {
        onClick();
        startSpin(!isSpin);
      }}
      className={classnames({
        'cl-button': true,
        active: isSpin,
      })}
    >
      <FlipArrowsSvg />
    </Button>
  );
};

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

export default SwitchButton;
