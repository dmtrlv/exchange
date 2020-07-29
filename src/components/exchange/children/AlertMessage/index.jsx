import React from 'react';
import PropTypes from 'prop-types';

import { AlertMessageWrapper } from './styled';

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

const AlertMessage = ({ children, onClick }) => (
  <AlertMessageWrapper onClick={onClick}>
    <span>{children}</span>
  </AlertMessageWrapper>
);

AlertMessage.propTypes = propTypes;
AlertMessage.defaultProps = defaultProps;

export default AlertMessage;
