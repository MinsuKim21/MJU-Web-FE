import React, { useEffect } from 'react';

var vh = 0;

function App() {
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <div className="App">
      <header className="App-header">test</header>
    </div>
  );
}

export default App;
