import React from 'react';
import Heading from '../ui/Heading';

const headerItems = [
  { id: 0, href: '#top', title: 'MJU Developers' },
  { id: 1, href: '#introduction', title: 'Introduction' },
  { id: 2, href: '#actives', title: 'Activies' },
  { id: 3, href: '#howToJoin', title: 'how to join' },
];

export default function Nav() {
  return (
    <nav className="nav">
      {headerItems.map((item) => {
        return (
          <a key={item.id} href={item.href} className="nav-item">
            <Heading fontSize={'md:text-xl sm:text-sm '} fontWeight={'font-black'}>
              {item.title}
            </Heading>
          </a>
        );
      })}
    </nav>
  );
}
