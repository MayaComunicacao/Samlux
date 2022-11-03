import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Categories from '../../inc/categories.json';
import configcss from '../../styles/configcss';

const Navigation = () => {
  const Router = useRouter();

  return (
    <nav className="text-gray">
      {Categories.map((item, index) => {
        const submenu = item.submenu;

        if (item.submenu.length > 0) {
          return (
            <span key={index} className="relative group z-10 inline-block">
              <Link href={item.path}>
                <a className={'block text-xl lg:text-base lg:pr-4 pb-4'}>
                  {item.label}
                </a>
              </Link>
              <div
                className={
                  'submenu text-xl lg:text-base lg:absolute lg:top-8 lg:left-0 bg-white lg:text-center lg:border border-slate-300 lg:invisible lg:opacity-0 lg:translate-y-6 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-y-0'
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
                  'block text-xl lg:inline-block lg:text-base py-3 lg:pr-4 2xl:pr-3'
                }
                style={{
                  color:
                    Router.asPath === item.path
                      ? configcss.colors.green
                      : configcss.colors.gray
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
