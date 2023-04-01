import React from 'react';
import PropTypes from 'prop-types';

export default function OpasityBox({ children, fontSize }) {
  return (
    <div className="w-full shadow-sm my-1.5">
      <div className="bg-slate-400 bg-opacity-30 py-5 sm:px-10 px-5">
        <p className={`text-slate-100 ${fontSize}`}>{children}</p>
      </div>
    </div>
  );
}

OpasityBox.propsTypes = {
  children: PropTypes.node.isRequired,
};

OpasityBox.defaultProps = {
  fontSize: 'md:text-xl sm:text-xl text-sm',
};
