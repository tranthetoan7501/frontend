import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='wrap flex'>
        <div className='logo flex'>
          <a className='flex' href='/'>
            Mia<span>liulo</span>
          </a>
        </div>
        <nav className='navbar'>
          <button className='close-nav'>&#10006;</button>
          <ul className='flex'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/write'>Privacy</a>
            </li>
            <li>
              <a href='/write'>Write</a>
            </li>
          </ul>
        </nav>
        <div className='icon-bar flex'>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
