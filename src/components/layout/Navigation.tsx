import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Categories from '../../inc/categories.json';
import configcss from '../../styles/configcss';

interface MenuProps {
  device: string;
}

const Navigation = ({ device }: MenuProps) => {
  const Router = useRouter();

  return (
    <nav className="text-gray">
      {Categories.map((item, index) => {
        const submenu = item.submenu;

        if (item.submenu.length > 0) {
          return (
            <span key={index} className="relative group z-10 inline-block">
              <Link href={item.path}>
                <a
                  className={device === 'desk' ? 'pr-4 pb-4' : 'block text-xl'}
                >
                  {item.label}
                </a>
              </Link>
              <div
                className={
                  device === 'desk'
                    ? 'absolute top-8 left-0 submenu bg-white text-center border border-slate-300 invisible opacity-0 translate-y-6 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-y-0'
                    : 'submenu text-lg'
                }
              >
                {submenu.map((item, index) => {
                  return (
                    <Link key={index} href={`/produtos/${item.path}`}>
                      <a>{item.label}</a>
                    </Link>
                  );
                })}
              </div>
            </span>
          );
        } else {
          return (
            <Link key={index} href={item.path}>
              <a
                className={
                  device === 'desk' ? 'pr-4 2xl:pr-3' : 'block text-xl py-3'
                }
                style={{
                  color:
                    Router.asPath === item.path ? configcss.colors.green : ''
                }}
              >
                {item.label}
              </a>
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Navigation;
