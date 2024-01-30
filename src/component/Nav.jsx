import React from 'react';
import Logo from '../image/logo-removebg-preview.png';

const Nav = ({ logo_text }) => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo-section">
          <img src={Logo} alt="Logo" />
          {logo_text && (
            <div className="span-container">
              <span className="span-text-1">LOSANGELES</span> <br />
              <span className="span-text-2">MOUNTAIN</span>
            </div>
          )}
        </div>

        <ul>
          <li className={`${logo_text && 'li_color'}`}>01.HISTORY</li>
          <li className={`${logo_text && 'li_color'}`}>02.TEAM</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
