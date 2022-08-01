import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaListUl } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import NavLinkEl from './NavLink';
import logo from '../../assets/logo.svg';
import '../../styles/sidenav.css';

const SideNav = () => (
  <nav className="grid grid-rows-[1fr 1fr 1fr] py-6 w-[61.58px] h-[100vh]">
    <div className="flex justify-center">
      <Link to="/">
        <img src={logo} alt="Shoppingify Logo" />
      </Link>
    </div>
    <div className="flex justify-evenly flex-col relative items-center">
      <NavLinkEl
        to="/"
        icon={<FaListUl size={21} />}
      />
      <NavLinkEl
        to="/history"
        icon={<IoMdRefresh size={22} />}
      />
      <NavLinkEl
        to="analysis"
        icon={<MdOutlineAnalytics size={22} />}
      />
    </div>
    <div
      className="flex justify-center items-center self-end justify-self-center rounded-[50%] bg-orange w-[42px] h-[42px]"
    >
      <NavLink
        to="cart"
        style={{ color: 'var(--white)' }}
      >
        <BsCart3 size={22} />
      </NavLink>
    </div>
  </nav>
);

export default SideNav;
