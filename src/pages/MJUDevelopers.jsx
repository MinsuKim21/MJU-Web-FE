import React from 'react';
import TypingAni from '../components/animation/TypingAni';

export default function MJUDevelopers() {
  return (
    <div className="mainContext">
      <TypingAni fontSize={' xl:text-9xl lg:text-8xl md:text-6xl sm:text-5xl text-4xl'} textColor={'text-black'}>
        MJU Developers!
      </TypingAni>
    </div>
  );
}
