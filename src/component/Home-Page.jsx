import React from 'react';
import Hero from './hero/Hero';
import History from './history/History';
import Schedule from './schedule/Schedule';
import Nav from './Nav';
import Climb from './climb/Climb';

const HomePage = () => {
  return (
    <div className="home-container">
      <Hero />
      <Nav logo_text />

      <History />
      <Climb />
      <Schedule />
    </div>
  );
};

export default HomePage;
