import React from 'react';
import GridComponent from './GridComponent';
import Context from './Context';
import Heading from './Heading';

export default function Table() {
  return (
    <>
      <GridComponent
        leftContent={
          <Heading Talign={'left'} fontSize={'md:text-3xl sm:text-xl text-lg'}>
            모집대상 |
          </Heading>
        }
        rightContent={<Context fontSize={'md:text-2xl text-lg'}>코딩, 디자인에 관심있는 누구나</Context>}
        hrOn={false}
        Padding={'pb-10'}
      />
      <GridComponent
        leftContent={
          <Heading Talign={'left'} fontSize={'md:text-3xl sm:text-xl text-lg'}>
            모집대상 |
          </Heading>
        }
        rightContent={<Context fontSize={'md:text-2xl text-lg'}>코딩, 디자인에 관심있는 누구나</Context>}
        hrOn={false}
        Padding={'pb-10'}
      />
      <GridComponent
        leftContent={
          <Heading Talign={'left'} fontSize={'md:text-3xl sm:text-xl text-lg'}>
            모집대상 |
          </Heading>
        }
        rightContent={<Context fontSize={'md:text-2xl text-lg'}>코딩, 디자인에 관심있는 누구나</Context>}
        hrOn={false}
        Padding={'pb-10'}
      />
      <GridComponent
        leftContent={
          <Heading Talign={'left'} fontSize={'md:text-3xl sm:text-xl text-lg'}>
            모집대상 |
          </Heading>
        }
        rightContent={<Context fontSize={'md:text-2xl text-lg'}>코딩, 디자인에 관심있는 누구나</Context>}
        hrOn={false}
        Padding={'pb-10'}
      />
    </>
  );
}
