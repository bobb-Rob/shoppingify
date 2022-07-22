import React from 'react';
import { FaListUl } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/sidenav.css'

const SideNav = () => {
  return (
    <nav className="side-navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="Shoppingify Logo" />
        </Link>
      </div>
      <div style={{color: 'var(--navIconColor)'}}>
        <NavLink
          to='/list'
          className="list-nav-link"
        >
          <FaListUl size={21} />
        </NavLink>
        <NavLink to='/history'>
          <IoMdRefresh size={22} />
        </NavLink>
        <NavLink to="analysis">
          <MdOutlineAnalytics size={22} />
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