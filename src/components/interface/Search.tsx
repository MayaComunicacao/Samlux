import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

interface SearchProps {
  device: string;
}

const Search = ({ device }: SearchProps) => {
  return (
    <div className={`${device === 'mobi' ? 'w-full' : ' '} relative flex`}>
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
