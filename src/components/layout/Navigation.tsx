import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import configcss from '../../styles/configcss';

const Navigation = ({ apidata }: { apidata: any }) => {
  const Router = useRouter();

  const submenu = apidata.navigation?.map(
    (item: { name: string; slug: string }) => {
      return {
        name: item.name,
        path: `/produtos/${item.slug}`
      };
    }
  );

  const Categories = [
    {
      label: 'A Samlux',
      path: '/a-samlux',
      submenu: []
    },
    {
      label: 'Produtos',
      path: '/produtos/todos',
      submenu: submenu
    },
    {
      label: 'Projeto Personalizado',
      path: '/contato/projeto-personalizado',
      submenu: []
    },
    {
      label: 'Downloads',
      path: '/downloads',
      submenu: []
    },
    {
      label: 'Contato',
      path: './#',
      submenu: [
        {
          name: 'fale-conosco',
          path: '/contato/fale-conosco'
        },
        {
          name: 'Onde estamos',
          path: '/nossas-lojas'
        }
      ]
    }
  ];

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
                  'submenu text-xl lg:text-base lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 bg-white lg:text-center lg:border border-slate-300 lg:invisible lg:opacity-0 lg:translate-y-6 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-y-0'
                }
              >
                {submenu.map((item: any, index: number) => {
                  return (
                    <Link key={index} href={`${item.path}`}>
                      <a className="whitespace-nowrap">{item.name}</a>
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
