import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import Logo from '../../assets/img/logo.png';
import Search from '../interface/Search';
import SocialIcons from '../interface/Socialicons';
import { BiMenu } from 'react-icons/bi';
import configcss from '../../styles/configcss';
import Resize from '../set/Getwidthdevice';
import { IoMdClose } from 'react-icons/io';

const HeaderApp = () => {
  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const type = Resize();
  const device = type.width > 1024 ? 'desk' : 'mobi';

  return (
    <>
      <div className="border-b border-b-zinc-200 py-5 hidden lg:block">
        <div className="container">
          <div className="flex w-full items-center">
            <div className="w-[calc(50%_-_90px)]">
              <Navigation device={device} />
            </div>
            <div className="w-[160px]">
              <Image layout="intrinsic" src={Logo} alt="Logotipo Sanlux" />
            </div>
            <div className="flex items-center justify-end w-[calc(50%_-_90px)]">
              <Search device={device} />
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile py-5 px-4 block lg:hidden">
        <div className="flex w-full items-center justify-between">
          <div className="w-[140px]">
            <Image layout="intrinsic" src={Logo} alt="Logotipo Sanlux" />
          </div>
          <button onClick={onClick}>
            <BiMenu size="24px" color={configcss.colors.gray} />
          </button>
        </div>
        <div
          ref={menuRef}
          className={`w-full fixed top-0 left-0 h-screen bg-white py-8 px-8 transition-all z-50  ${
            isActive
              ? 'translate-x-0 opacity-100 visible'
              : '-translate-x-full opacity-0 invisible'
          }`}
        >
          <button
            onClick={onClick}
            className="block lg:hidden absolute top-4 right-4"
          >
            <IoMdClose size="24px" color={configcss.colors.gray} />
          </button>
          <Navigation device={device} />
          <div
            className={
              device === 'desk'
                ? 'flex items-center justify-end w-[calc(50%_-_90px)]'
                : 'block w-full] mt-8'
            }
          >
            <div className="w-full block">
              <Search device={device} />
            </div>
            <div className="w-full block mt-5">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderApp;
