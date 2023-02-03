import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const SocialIcons = () => {
  return (
    <div className="flex">
      <a href="https://web.facebook.com/samluxiluminacao" className="px-2">
        <BsFacebook className="fill-gray hover:fill-green" />
      </a>
      <a href="https://www.instagram.com/samluxiluminacao/" className="px-2">
        <BsInstagram className="fill-gray hover:fill-green" />
      </a>
    </div>
  );
};

export default SocialIcons;
