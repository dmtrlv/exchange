/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import InlineSVG from '../InlineSVG';

import { DropDownListWrapper } from './styled';

const propTypes = {
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  list: PropTypes.arrayOf(),
};

const defaultProps = {
  onClick: () => {},
  onClose: () => {},
  list: [],
};

const debouncedCallback = debounce((fn) => fn(), 350);

const DropDownList = ({ onClose, onClick, list }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputValueForFilter, setInputValueForFilter] = useState('');
  const contentEl = useRef(null);

  const clickHandler = (e) => {
    if (!contentEl.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  const handleChange = (value) => {
    setInputValue(value);
    debouncedCallback(() => setInputValueForFilter(value));
  };

  const dataFilter = (data) => {
    const filteredData = data
      .filter((item) => item.ticker.toLowerCase().match(inputValueForFilter.toLowerCase()));
    return filteredData;
  };

  const filteredList = dataFilter(list);

  return (
    <DropDownListWrapper ref={contentEl}>
      <div className="list-item search">
        <input
          placeholder="Search"
          className="cl-input"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {filteredList.map((item) => {
        const itemTicker = item.ticker;
        return (
          <div className="list-item" onClick={(e) => onClick(e, itemTicker)}>
            <InlineSVG url={item.image} />
            <div className="label">{item.ticker}</div>
            <span className="coin-name">{item.name}</span>
          </div>
        );
      })}
    </DropDownListWrapper>
  );
};

DropDownList.propTypes = propTypes;
DropDownList.defaultProps = defaultProps;

export default DropDownList;
