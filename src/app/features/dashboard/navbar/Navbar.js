import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaListUl } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { UserContext } from '../../../DataProvider';
import NavLinkEl from './NavLink';
import logo from '../../../../assets/logo.svg';

const SideNav = () => {
  const { cartBtnClicked, setCartBtnClicked, windowSize } = useContext(UserContext);

  return (
    <nav className="grid grid-rows-[1fr 1fr 1fr] py-6 w-[61.58px] h-[100vh]">
      <div className="flex justify-center">
        <Link to="/dashboard/list">
          <img src={logo} alt="Shoppingify Logo" />
        </Link>
      </div>
      <div className="flex justify-evenly flex-col relative items-center">
        <NavLinkEl
          to="/dashboard/list"
          icon={<FaListUl size={21} />}
        />
        <NavLinkEl
          to="/dashboard/history"
          icon={<IoMdRefresh size={22} />}
        />
        <NavLinkEl
          to="/dashboard/analysis"
          icon={<MdOutlineAnalytics size={22} />}
        />
      </div>
      <div
        className="flex justify-center items-center self-end justify-self-center rounded-[50%] bg-orange w-[42px] h-[42px]"
      >
        <NavLink
          to={(cartBtnClicked && windowSize < 768) ? '/dashboard/list' : '/dashboard/cart'} // Go back to root route if cartBtnClicked is true
          state={{ cartBtnClicked: !cartBtnClicked, windowSize }}
          style={{ color: 'var(--white)' }}
          onClick={() => {
            // Check and trigger below function only if window screen is below 768px;
            if (windowSize < 768) {
              // cartBtnClicked ? setCartBtnClicked(false) : setCartBtnClicked(true);
              if (cartBtnClicked) {
                setCartBtnClicked(false);
              } else {
                setCartBtnClicked(true);
              }
            }
          }}
        >
          <BsCart3 size={22} />
        </NavLink>
      </div>
    </nav>
  );
};

export default SideNav;
