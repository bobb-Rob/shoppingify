import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';


const Header = () => {

  return (
    <header>
      <span>
        Shoppingify allows you take your
        <br />
        shopping list wherever you go
      </span>
      <div className="search-bar">
        <BiSearchAlt2 />
        <input type="search" />
      </div>      
    </header>
  );
};

export default Header;