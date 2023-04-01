import React, { useState } from 'react';
import VerticalMenu from './VerticalMenu';

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const onHandleClick = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <button className="text-slate-100 md:hidden float-right mr-10 block" onClick={onHandleClick}>
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>
      {toggle ? <VerticalMenu /> : <></>}
    </>
  );
}
