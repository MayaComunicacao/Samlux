import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
  return (
    <div className={'w-full lg:w-auto lg:mr-3 relative flex'}>
      <input
        type="search"
        name="search"
        placeholder="Busca"
        className="min-w-[300px] py-1 px-2 border-b border-gray"
      />
      <button className="border-b border-gray p-2">
        <BiSearchAlt className="fill-gray" />
      </button>
    </div>
  );
};

export default Search;
