import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { InputWrapper } from './styled';

const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isInvalid: PropTypes.bool,
  onChange: PropTypes.func,
  errMessage: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  placeholder: undefined,
  value: '',
  isInvalid: false,
  onChange: () => {},
  errMessage: undefined,
  className: '',
  type: 'text',
};

const InputComponent = ({
  placeholder,
  isInvalid,
  type,
  value,
  onChange,
  className,
  errMessage,
}) => (
  <InputWrapper className={classnames({
    'cl-input-wrapper': true,
    [className]: true,
  })}
  >
    <input
      className="cl-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    {isInvalid && errMessage.length > 0
      ? <div className="error-message">{errMessage}</div>
      : null}
  </InputWrapper>
);

InputComponent.propTypes = propTypes;
InputComponent.defaultProps = defaultProps;

export default InputComponent;
