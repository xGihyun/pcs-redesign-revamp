import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMobile from './DropdownMobile';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

const ArrowDown = () => <MdKeyboardArrowDown className='arrow' size={25} />
const ArrowRight = () => <MdKeyboardArrowRight className='arrow' size={25} />

const NavbarMobile = ({ navItems }) => {

  // Get clicked element
  const [click, setClick] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = (e) => {
    const clickedElement = e.target.getAttribute("data-nav");

    setClick(clickedElement);

    click === clickedElement && showDropdown ? setShowDropdown(false) : setShowDropdown(true);
  }

  return (
    <div className='nav-mobile-dropdown'>
      <ul className='h-full flex flex-col'>
        {navItems.map(item => {
          if(item.data === 'about' || item.data === 'academics'){
            return (
              <li key={item.id} className='item flex flex-col'>
                <div className='flex flex-row-reverse text-white'>
                  {showDropdown && click === item.data ? <ArrowDown /> : <ArrowRight />}
                  <NavLink to="#" className={({ isActive }) => (isActive ? "active" : null)}
                    data-nav={item.data} onClick={handleClick}
                  >
                    {item.title}
                  </NavLink>
                </div>
                { showDropdown && click === item.data ? <DropdownMobile drop={item.data} /> : null }
              </li>
            )
          }
          return (
            <li key={item.id} className='item'>
              <NavLink to={item.path} className={({isActive}) => (isActive ? "active" : null)} data-nav={item.data}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavbarMobile