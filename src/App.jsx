import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Dishes from './sections/Dishes';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Dishes />
    </>
  );
};

export default App;
