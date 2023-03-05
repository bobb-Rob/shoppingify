import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import AccountIcon from '../../sessions/AccountIcon';

const ItemContainerHeader = () => (
  <header className="bg-white">
    <div className=" md:pl-16 flex items-center">
      <span className="text-[16px] md:text-[26px] font-semibold grow hidden md:block break-words max-w-md">
        <span className="text-orange">Shoppingify </span>
        allows you take your shopping list wherever you go
      </span>
      <div className="flex items-center h-[50.92px] p-4 mr-8 rounded-md shadow-lg grow">
        <BiSearchAlt2 size={26} />
        <input type="text" placeholder="Search item" className="ml-4 p-2 w-full" />
      </div>
      <AccountIcon />
    </div>
  </header>
);

export default ItemContainerHeader;
