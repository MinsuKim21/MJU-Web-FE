import React from 'react';
import PropTypes from 'prop-types';

export default function Context({ children, fontSize }) {
  return <h5 className={`text-slate-100 ${fontSize} text-left`}>{children}</h5>;
}

Context.propsTypes = {
  children: PropTypes.node.isRequired,
};

Context.defaultProps = {
  fontSize: 'md:text-3xl sm:text-xl text-lg',
};
