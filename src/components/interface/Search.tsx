import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleSubmit = () => {
    if (!inputRef) return;

    const inputValue = inputRef.current?.value;

    if (!inputValue || inputValue.length < 3) return;

    router.push(`/produtos/pesquisa?s=${inputValue}`);
  };

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && inputRef.current)
      inputRef.current.value = '';
  }, [router.query]);

  return (
    <div className={'w-full lg:w-auto lg:mr-3 relative flex'}>
      <input
        ref={inputRef}
        type="search"
        name="search"
        placeholder="Busca"
        className="min-w-[300px] py-1 px-2 border-b border-gray"
        onKeyUp={(e) => {
          if (e.nativeEvent.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
      <button
        className="border-b border-gray p-2"
        onClick={() => handleSubmit()}
      >
        <BiSearchAlt className="fill-gray" />
      </button>
    </div>
  );
};

export default Search;
