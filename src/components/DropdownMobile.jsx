import React from 'react';
import { NavLink } from 'react-router-dom';
import { dropdownItems } from '../constants/Items';

const Dropdown = ({ drop }) => (
  <ul className='dropdown-mobile'>
    {dropdownItems[drop].map((item) => {
      return (
        <li key={item.id} className='pr-1 pl-10 py-1'>
          <NavLink className={({isActive}) => (isActive ? "active" : null)} to={item.path}>{item.title}</NavLink>
        </li>
      )
    })}
  </ul>
)

export default Dropdown