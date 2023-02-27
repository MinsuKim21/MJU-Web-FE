import React from 'react';

export default function Bar({ color }) {
  return <h1 className={`py-7 ${color} md:text-8xl text-4xl font-light`}>|</h1>;
}

Bar.defaultProps = {
  color: 'text-slate-100',
};
