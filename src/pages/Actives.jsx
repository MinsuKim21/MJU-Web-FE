import React from 'react';
import bgImg1 from '.././assets/images/bgImg1.png';
import bgImg2 from '.././assets/images/bgImg2.png';
import Carousel from '../components/carousel/Carousel';

export default function Actives() {
  return (
    <section className="MJU-Developers" id="actives">
      <img src={bgImg1} alt="background image" className="w-full" />
      <article className="bg-custom text-slate-800 py-6">
        <Carousel />
      </article>
      <img src={bgImg2} alt="background image" className="w-full" />
    </section>
  );
}
