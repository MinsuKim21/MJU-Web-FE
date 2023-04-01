import React, { useEffect, useState } from 'react';
import CarouselItem from './CarouselItem';

const dummy = [
  { id: -1, test: '처음' },
  { id: 0, test: 'test' },
  { id: 1, test: 'test' },
  { id: 2, test: 'test' },
  { id: 3, test: 'test' },
  { id: 4, test: '중간' },
  { id: 5, test: 'test' },
  { id: 6, test: 'test' },
  { id: 7, test: 'test' },
  { id: 8, test: 'test' },
  { id: 9, test: '마지막' },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % numSlides);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const numSlides = 3;

  return (
    <div className="overflow-hidden">
      <div
        className={`flex transition-transform ease-out duration-1000`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {dummy.map((item) => {
          return <CarouselItem key={item.id}>{item.test}</CarouselItem>;
        })}
      </div>
    </div>
  );
}
