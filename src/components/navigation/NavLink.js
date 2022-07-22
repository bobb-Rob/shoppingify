import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkEl = ({icon, handleClick, to}) => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  
  return (
    <div>
      <NavLink
        to={to}
        onClick={handleClick}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
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