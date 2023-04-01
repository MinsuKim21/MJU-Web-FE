import React from 'react';
import Heading from '../ui/Heading';

const headerItems = [
  { id: 0, href: '#top', title: 'MJU Developers' },
  { id: 1, href: '#introduction', title: 'Introduction' },
  { id: 2, href: '#actives', title: 'Activies' },
  { id: 3, href: '#howToJoin', title: 'how to join' },
];

export default function VerticalMenu() {
  return (
    <nav className="w-2/6 text-slate-100 bg-gray-800 float-right rounded-sm relative top-12 left-12">
      {headerItems.map((item) => {
        return (
          <a key={item.id} href={item.href} className="nav-vertical">
            <Heading fontSize={'lg:text-lg sm:text-base text-xs'} fontWeight={'font-black'}>
              {item.title}
            </Heading>
          </a>
        );
      })}
    </nav>
  );
}
