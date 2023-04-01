import React from 'react';
import Nav from './Nav';
import Menu from './Menu';
// import Heading from './Heading';

export default function Header() {
  return (
    <header className="headerContainer">
      <Nav />
      <Menu />
    </header>
  );
}
