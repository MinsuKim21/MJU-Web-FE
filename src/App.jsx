import React, { useEffect } from 'react';
import Layout from './components/layout';
import Actives from './pages/Actives';
import HowToJoin from './pages/HowToJoin';
import MJUDevlopers from './pages/MJUDevelopers';
import Introduction from './pages/Introduction';

let vh = 0;

function App() {
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <Layout>
      <MJUDevlopers />
      <Introduction />
      <Actives />
      <HowToJoin />
    </Layout>
  );
}

export default App;
