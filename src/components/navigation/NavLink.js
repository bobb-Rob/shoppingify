import React from 'react';

const NavLink = ({icon}) => {
  return (
    <div>
      <NavLink
        to={to}
        onClick={onClick}
      >
          {icon}
      </NavLink>
    </div>
  )
}

export default NavLink