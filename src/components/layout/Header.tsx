import React, { useRef } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import Logo from '../../assets/img/logo.png';
import Search from '../interface/Search';
import SocialIcons from '../interface/Socialicons';
import { BiMenu } from 'react-icons/bi';
import configcss from '../../styles/configcss';
import { IoMdClose } from 'react-icons/io';
import { useMenu } from '../context/contextMenu';
import Link from 'next/link';

interface Props {
  apiData: any;
}

const HeaderApp = ({ apiData }: Props) => {
  const { state: isActive, setStatusMenu } = useMenu();

  const menuRef = useRef(null);

  const onClick = (state: boolean) => setStatusMenu(state);

  return (
    <>
      <div className="border-b border-b-zinc-200 py-5 hidden lg:block">
        <div className="container">
          <div className="flex w-full items-center">
            <div className="w-[calc(50%_-_90px)]">
              <Navigation apiData={apiData} />
            </div>
            <div className="w-[160px]">
              <Link href="/" passHref>
                <a className="relative">
                  <Image layout="intrinsic" src={Logo} alt="Logotipo Sanlux" />
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-end w-[calc(50%_-_90px)]">
              <Search />
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 block lg:hidden">
        <div className="flex w-full items-center justify-between">
          <div className="w-[140px]">
            <Image layout="intrinsic" src={Logo} alt="Logotipo Sanlux" />
          </div>
          <button onClick={() => onClick(true)}>
            <BiMenu size="24px" color={configcss.colors.gray} />
          </button>
        </div>
        <div
          ref={menuRef}
          className={`w-full fixed top-0 left-0 h-screen bg-white py-8 px-8 transition-all z-50  ${
            isActive
              ? 'lg:translate-x-0 lg:opacity-100 lg:visible'
              : '-translate-x-full opacity-0 invisible'
          }`}
        >
          <button
            onClick={() => onClick(false)}
            className="block lg:hidden absolute top-4 right-4"
          >
            <IoMdClose size="24px" color={configcss.colors.gray} />
          </button>
          <Navigation apiData={apiData} />
          <div
            className={
              'block w-full] mt-8 lg:flex lg:items-center lg:justify-end lg:w-[calc(50%_-_90px)]'
            }
          >
            <div className="w-full block">
              <Search />
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
