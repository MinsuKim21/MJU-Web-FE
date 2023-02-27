import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ children, fontSize, fontWeight, Talign }) {
  return <h1 className={`${fontSize} m-auto text-slate-100 ${fontWeight} text-${Talign}`}>{children.toUpperCase()}</h1>;
}

Heading.defaultProps = {
  fontSize: 'md: text-2xl text-sm',
  fontWeight: 'font-bold',
  Talign: 'center',
};

Heading.propsTypes = {
  children: PropTypes.node.isRequired,
};
