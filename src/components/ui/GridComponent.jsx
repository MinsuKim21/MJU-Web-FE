import React from 'react';
import PropTypes from 'prop-types';

export default function GridComponent({ leftContent, rightContent, hrOn, Padding }) {
  return (
    <>
      <div className="flex justify-around">
        <div className={`w-2/5 ${Padding}`}>{leftContent}</div>
        <div className={`w-3/5 ${Padding}`}>{rightContent}</div>
      </div>
      {hrOn ? <hr className="border-0.1 border-slate-700 md:mx-10 m-5" /> : null}
    </>
  );
}

GridComponent.defaultProps = {
  hrOn: true,
  Padding: 'md:p-10 p-0',
};

GridComponent.propsTypes = {
  hrOn: PropTypes.bool,
  Padding: PropTypes.node,
};
