import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';


const Header = () => {

  return (
    <header className="flex items-center">
      <span>
        Shoppingify allows you take your
        <br />
        shopping list wherever you go
      </span>
      <div className="flex items-center h-10 p-4 rounded-md shadow-lg">
        <BiSearchAlt2 size={22} />
        <input
          type="text"
          placeholder="Search item"
          className="ml-4"
        />
      </div>      
    </header>
  );
};

export default Header;