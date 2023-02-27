import React, { useEffect, useState } from 'react';
import Heading from '../components/ui/Heading';
import Bar from '../components/ui/Bar';
import Context from '../components/ui/Context';
import GridComponent from '../components/ui/GridComponent';
import Table from '../components/ui/Table';
import TypingAni from '../components/animation/TypingAni';

export default function MJUDevlopers(props) {
  const [view, setView] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setView(true);
    }, 2100);
  }, []);
  return (
    <section className="MJU-Developers" id="introduction">
      {view ? (
        <TypingAni fontSize={'md:text-3xl text-base'} fontWeight={'font-normal'}>
          What we do?
        </TypingAni>
      ) : null}
      {/* <Heading fontWeight={'font-black'} fontSize={'md:text-4xl text-3xl'}>
        MJU Developers
      </Heading> */}
      <Bar />
      {/* 이미지 입력 */}
      <GridComponent
        leftContent={
          <Heading fontSize={'md:text-6xl sm:text-3xl text-2xl'} fontWeight={'font-black'} ref={props.element}>
            소개
          </Heading>
        }
        rightContent={
          <Context>
            MJU Devlopers는 명지대학교 IT 분야를 공부하는 학생들이 전공, 진로, 취업 등 다양한 탐색을 할 수 있는
            커뮤니티입니다.
          </Context>
        }
      />
      <GridComponent
        leftContent={
          <Heading fontSize={'md:text-6xl sm:text-3xl text-2xl'} fontWeight={'font-extrabold'}>
            활동
          </Heading>
        }
        rightContent={<Table />}
        hrOn={false}
      />
    </section>
  );
}
