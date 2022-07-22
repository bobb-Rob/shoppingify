import React from 'react';
import { FaListUl } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="Shoppingify Logo" />
        </Link>
      </div>
      <div>
        <NavLink to='/list'>
          <FaListUl />
        </NavLink>
        <NavLink to='/history'>
          <IoMdRefresh />
        </NavLink>
        <NavLink to="analysis">
          <MdOutlineAnalytics />
        </NavLink>
      </div>
      <div>
        <NavLink to="cart">
          <BsCart3 />
        </NavLink>        
      </div>
    </nav>
  )
}

export default SideNav;