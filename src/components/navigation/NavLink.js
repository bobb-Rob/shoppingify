import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkEl = ({icon, handleClick, to}) => {
  const activeStyle = {
  
  };
  
  return (
    <div className='nav-wrap'>
      <NavLink
        to={to}
        onClick={handleClick}       
        className={({ isActive }) => (isActive ? "list-nav-link" : undefined)}
      >
        {icon}
      </NavLink>
    </div>
  )
}

export default NavLinkEl;

NavLinkEl.propTypes = {
  icon: PropTypes.element.isRequired,
  handleClick: PropTypes.func,
  to: PropTypes.string.isRequired
};

NavLinkEl.defaultProps = {
  handleClick: () => {},
}