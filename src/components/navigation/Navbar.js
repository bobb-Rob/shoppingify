import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavLinkEl from './NavLink';
import { FaListUl } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import logo from '../../assets/logo.svg';
import '../../styles/sidenav.css'

const SideNav = () => {
  return (
    <nav className="side-navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="Shoppingify Logo" />
        </Link>
      </div>
      <div>
        <NavLinkEl
          to='/'          
          icon={<FaListUl size={21} />}
        />    
        <NavLinkEl
          to='/history'
          icon={<IoMdRefresh size={22} />}
        />
        <NavLinkEl
          to="analysis"
          icon={<MdOutlineAnalytics size={22} />}
        />        
      </div>
      <div >
        <NavLink
          to="cart"
          style={{color: 'var(--white)'}}
        >
          <BsCart3 size={22}/>
        </NavLink>        
      </div>
    </nav>
  )
}

export default SideNav;