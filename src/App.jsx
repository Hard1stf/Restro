import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
    </>
  );
};

export default App;
