import React, { useState } from 'react';
import './Schedule.css';
import Logo from '../../image/logo-removebg-preview.png';

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="schedule-container">
      <nav className="container nav-btn">
        <li
          className={`${activeIndex === 0 && 'bg-underline'}`}
          onClick={() => setActiveIndex(0)}
        >
          MOUNTAIN 1
        </li>
        <li
          className={`${activeIndex === 1 && 'bg-underline'}`}
          onClick={() => setActiveIndex(1)}
        >
          MOUNTAIN 2
        </li>
      </nav>

      <div className="bg-img"></div>
      <div className="container footer">
        <div className="logo-div">
          <img src={Logo} alt="Logo" />

          <div className="span-container">
            <span className="span-text-1">LOSANGELES</span> <br />
            <span className="span-text-2">MOUNTAIN</span>
          </div>
        </div>
        <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Schedule;
