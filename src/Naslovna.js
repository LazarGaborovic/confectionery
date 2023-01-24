import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Naslovna.css';
const Naslovna = () => {
  return (
    <div className='home'>
      <div className='section-navigation'>
      <Nav className=' navigation container' >
        <NavItem>
          <NavLink href='#'>HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>ABOUT US</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>GALLERY</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>MENU</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>CONTACT</NavLink>
        </NavItem>
      </Nav>
      </div>
      <div className='head'>
        <h1>SWEET DREAMS FROM YOU</h1>
      </div>

    </div>
  );
};

export default Naslovna;