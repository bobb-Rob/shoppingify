import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const Header = () => (
  <header className="flex items-center border">
    <span className="text-[26px] font-semibold grow">
      <span className="text-orange">Shoppingify </span>
      allows you take your
      <br />
      shopping list wherever you go
    </span>
    <div className="flex items-center self-start h-[50.92px] w-[20%] p-4 rounded-md shadow-lg grow">
      <BiSearchAlt2 size={22} />
      <input
        type="text"
        placeholder="Search item"
        className="ml-4"
      />
    </div>
  </header>
);

export default Header;
