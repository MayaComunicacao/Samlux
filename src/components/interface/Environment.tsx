import Link from 'next/link';
import React from 'react';
import {
  IconFloor,
  IconGarden,
  IconOutside,
  IconRoof,
  IconTable,
  IconWall
} from './IconEnvironments';
import TitleApp from './Title';

interface ButtonProps {
  children: React.ReactNode;
  slug: string;
  href: string;
}

const EnvironmentApp = () => {
  const color = '#706f6f';
  const size = '70px';

  const IconsImg = [
    {
      comp: <IconTable cor={color} size={size} />,
      text: 'Mesa',
      href: './produtos/mesa'
    },
    {
      comp: <IconWall cor={color} size={'85px'} />,
      text: 'Parede',
      href: './produtos/parede'
    },
    {
      comp: <IconFloor cor={color} size={size} />,
      text: 'Piso',
      href: './produtos/piso'
    },
    {
      comp: <IconRoof cor={color} size={size} />,
      text: 'Teto',
      href: './produtos/teto'
    },
    {
      comp: <IconGarden cor={color} size={'65px'} />,
      text: 'Jardim',
      href: './produtos/jardim'
    },
    {
      comp: <IconOutside cor={color} size={'80px'} />,
      text: 'Externo',
      href: './produtos/externo'
    }
  ];

  const IconButton = ({ children, href }: ButtonProps) => {
    return (
      <Link href={href} passHref={true}>
        <a className="flex flex-col items-center justify-center px-2 sm:px-4 py-2 mx-2 sm:mx-4 lg:mx-12">
          {children}
        </a>
      </Link>
    );
  };

  return (
    <div className="container pt-10 swipper-dots">
      <TitleApp text={'Encontre a iluminação perfeita'} />
      <div>
        <div className="flex justify-center pt-12 pb-4 w-full overflow-x-auto">
          {IconsImg.map((element: any, index: number) => {
            return (
              <IconButton
                key={`${index}`}
                slug={element.text}
                href={element.href}
              >
                {element.comp}
                <span className="block mt-2 text-gray">{element.text}</span>
              </IconButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentApp;
