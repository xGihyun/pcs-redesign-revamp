import React from 'react';
import { NavLink } from 'react-router-dom';
import { dropdownItems } from '../constants/Items';

const Dropdown = ({ drop, scroll }) => (
  <ul className={scroll ? 'dropdown scrolled' : 'dropdown'}>
    {dropdownItems[drop].map((item) => {
      return (
        <li key={item.id}>
          <NavLink className={({isActive}) => (isActive ? "active" : null)} to={item.path}>{item.title}</NavLink>
        </li>
      )
    })}
  </ul>
)

export default Dropdown