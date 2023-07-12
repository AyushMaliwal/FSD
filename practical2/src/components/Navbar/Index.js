import React from 'react'
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activestyle>About</NavLink>
          <NavLink to='/services' activestyle>Services</NavLink>
          <NavLink to='/contact-us' activestyle>Contact Us</NavLink>
          <NavLink to='/sign-up' activestyle>Sign up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;