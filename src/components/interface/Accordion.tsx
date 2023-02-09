import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface AccordionProps {
  title: string;
  content: string[];
}

const AccordionApp = ({ title, content }: AccordionProps) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="w-full mb-6 leading-4">
      <button
        className="w-full relative text-left py-1 px-1 bg-transparent cursor-pointer group border-t border-t-zinc-300"
        onClick={toggle}
        type="button"
      >
        <span className="text-gray font-bold">{title}</span>
        <span className="absolute top-1 right-1">
          {isShowing ? (
            <IoIosArrowDown className="fill-green rotate-180 transition-all" />
          ) : (
            <IoIosArrowDown className="fill-gray group-hover:rotate-0 transition-all" />
          )}
        </span>
      </button>
      <div style={{ display: isShowing ? 'block' : 'none', padding: '5px' }}>
        {content.map((item, index) => {
          return (
            <label
              key={index}
              htmlFor={title + index.toString()}
              className="py-1 inline-block w-full text-gray"
            >
              <input
                className="mr-2"
                type="checkbox"
                name="radio"
                id={title + index.toString()}
              />
              <span className="text-sm">{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionApp;
