import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string,
};

const defaultProps = {
  url: undefined,
};

const InlineSvg = ({ url }) => {
  const [svg, setSVG] = useState();

  useEffect(() => {
    fetch(url)
      .then((r) => {
        if (r.status === 404) {
          return setSVG(null);
        }
        return r.text();
      })
      .then((text) => {
        setSVG(text);
      })
      .catch((err) => console.log({ err }));
  }, [url]);

  return (
    <div className="coin-icon" dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

InlineSvg.propTypes = propTypes;
InlineSvg.defaultProps = defaultProps;

export default InlineSvg;
