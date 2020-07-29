import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Dropdown from '../DropdownButton';
import DropDownList from '../DropDownList';

import { CurrencyBlock } from './styled';

const propTypes = {
  selectedItem: PropTypes.shape({}),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      hasExternalId: PropTypes.bool.isRequired,
      isFiat: PropTypes.bool.isRequired,
      featured: PropTypes.bool.isRequired,
      isStable: PropTypes.bool.isRequired,
      supportsFixedRate: PropTypes.bool.isRequired,
    }),
  ),
  onClick: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export const defaultProps = {
  selectedItem: {},
  value: '',
  list: [],
  onClick: () => {},
  type: 'text',
  onChange: () => {},
};

const Currency = ({
  selectedItem,
  list,
  onClick,
  value,
  onChange,
  type,
}) => {
  const [showDropDownList, setDropDownListVisibility] = useState(false);
  return (
    <CurrencyBlock>
      <Input type={type} value={value} onChange={onChange} />
      <Dropdown
        selectedItem={selectedItem}
        onClick={() => setDropDownListVisibility(true)}
      />
      {showDropDownList
        ? (
          <DropDownList
            list={list}
            onClose={() => setDropDownListVisibility(false)}
            onClick={(e, itemTicker) => {
              onClick(e, itemTicker);
              setDropDownListVisibility(false);
            }}
          />
        )
        : null}
    </CurrencyBlock>
  );
};

Currency.propTypes = propTypes;
Currency.defaultProps = defaultProps;

export default Currency;
