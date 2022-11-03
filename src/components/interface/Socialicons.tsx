import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const SocialIcons = () => {
  return (
    <div className="flex">
      <a href="https://facebook.com" className="px-2">
        <BsFacebook className="fill-gray hover:fill-green" />
      </a>
      <a href="https://instagram.com" className="px-2">
        <BsInstagram className="fill-gray hover:fill-green" />
      </a>
    </div>
  );
};

export default SocialIcons;
