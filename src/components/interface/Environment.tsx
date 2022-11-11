import React, { useEffect, useState } from 'react';
import SlideApp from './Slides';
import TitleApp from './Title';
import {
  IconTable,
  IconWall,
  IconFloor,
  IconRoof,
  IconGarden,
  IconOutside
} from './IconEnvironments';

interface ButtonProps {
  children: React.ReactNode;
  active: boolean;
  slug: string;
}

interface EnviromentProps {
  data: {
    img: string;
    categories: {
      name: string;
      slug: string;
    }[];
  }[];
}

const EnvironmentApp = ({ data }: EnviromentProps) => {
  const [active, setActive] = useState('Mesa');

  const handleClick = (slug: string) => setActive(slug);

  const [width, setWidth] = useState(0);

  const imgs = data?.map((item: any) => {
    return {
      url: item.img
    };
  });

  useEffect(() => {
    const whidth = document.body.clientWidth;

    if (whidth) {
      setWidth(whidth);
    }
  }, []);

  const color = '#706f6f';
  const size = width > 1024 ? '70px' : '50px';

  const IconsImg = [
    {
      comp: <IconTable cor={color} size={size} />,
      text: 'Mesa'
    },
    {
      comp: <IconWall cor={color} size={size} />,
      text: 'Parede'
    },
    {
      comp: <IconFloor cor={color} size={size} />,
      text: 'Piso'
    },
    {
      comp: <IconRoof cor={color} size={size} />,
      text: 'Teto'
    },
    {
      comp: <IconGarden cor={color} size={size} />,
      text: 'Jardim'
    },
    {
      comp: <IconOutside cor={color} size={size} />,
      text: 'Externo'
    }
  ];

  const IconButton = ({ children, active, slug }: ButtonProps) => {
    return (
      <button
        onClick={() => handleClick(slug)}
        className={
          active
            ? 'px-2 sm:px-4 py-2 mx-2 sm:mx-4 lg:mx-12 border-2 border-greenlight rounded-md'
            : 'px-2 sm:px-4 py-2 mx-2 sm:mx-4 lg:mx-12'
        }
      >
        {children}
      </button>
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
                active={active === element.text}
                slug={element.text}
              >
                {element.comp}
                <span
                  className={
                    active === element.text
                      ? 'block mt-2 text-greenlight'
                      : 'block mt-2 text-gray'
                  }
                >
                  {element.text}
                </span>
              </IconButton>
            );
          })}
        </div>
        <div className="mt-8 sm:mt-0 h-[250px] xl:h-[500px]">
          <SlideApp
            dot={true}
            nav={false}
            qnt={[2, 3, 4]}
            imgs={imgs}
            size={true}
            play={false}
          />
        </div>
      </div>
    </div>
  );
};

export default EnvironmentApp;
