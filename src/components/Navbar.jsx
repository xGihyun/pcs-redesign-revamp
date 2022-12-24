import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/pcsLogoBrown.png';
import { navItems } from '../constants/Items';
import Dropdown from './Dropdown';
import NavbarMobile from './NavbarMobile';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  // Check if user has scrolled
  const [scroll, setScrolled] = useState(false);

  // Check if user hovered over the navbar
  const [hovered, setHovered] = useState(false);

  // Check which element user is hovering on the navbar
  const [hoveredElement, setHoveredElement] = useState(null);

  // Dropdown navbar for smaller devices
  const [showNavbar, setShowNavbar] = useState(false);

  const shrinkNav = () => {
    window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
  }

  const handleMouseEnter = (e) => {
    const hoveredOver = e.target.getAttribute("data-nav");

    setHoveredElement(hoveredOver);
    setHovered(true);
  }

  const handleDropdown = () => {
    setShowNavbar(showNavbar => !showNavbar);
  }

  window.addEventListener("scroll", shrinkNav);

  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      { /* Navbar large devices */ }
      {hovered && <div className='w-full h-80 bg-black bg-opacity-75 border-b-4 border-b-primary' />}
      <nav className={scroll ? 'nav scrolled' : 'nav'}>
        <img src={logo} alt="" className='w-16 h-16'/>
        <ul className='h-full flex flex-row'>
          {navItems.map(item => {
            if(item.data === 'about' || item.data === 'academics'){
              return (
                <li key={item.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => setHovered(false)}>
                  <NavLink to="#" className={({isActive}) => (isActive ? "active" : null)} data-nav={item.data}>{item.title}</NavLink>
                  { hoveredElement === item.data && hovered ? <Dropdown drop={hoveredElement} scroll={scroll} /> : null }
                </li>
              )
            }
            return (
              <li key={item.id}>
                <NavLink to={item.path} className={({isActive}) => (isActive ? "active" : null)} data-nav={item.data}>{item.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      
      { /* Navbar small devices */ }
      <nav className='nav-mobile'>
        <img src={logo} alt="" className='w-12 h-12'/>
        <GiHamburgerMenu size={25} className='hamburger-menu' onClick={handleDropdown} />
      </nav>
      {showNavbar ? <NavbarMobile navItems={navItems} /> : null}
    </div>
  )
}

export default Navbar