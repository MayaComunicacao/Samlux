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
}

const IconButton = ({ children }: ButtonProps) => {
  return (
    <button className="px-2 sm:px-4 mx-2 sm:mx-4 lg:mx-12">{children}</button>
  );
};

interface EnviromentProps {
  data: any;
}

const EnvironmentApp = ({ data }: EnviromentProps) => {
  console.log(data);
  const [isActive, setIsActive] = useState(false);
  const click = () => setIsActive(!isActive);

  const imgs = data.map((obj: any) => {
    return {
      src: obj.src
      // sug: obj.
    };
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const whidth = document.body.clientWidth;

    if (whidth) {
      setWidth(whidth);
    }
  }, []);

  const color = '#706f6f';
  const size = width > 1024 ? '70px' : '50px';

  return (
    <div className="container pt-10 swipper-dots">
      <TitleApp text={'Encontre a iluminação perfeita'} />
      <div>
        <div className="flex justify-center pt-12 pb-4 w-full overflow-x-auto">
          <IconButton>
            <IconTable cor={color} size={size} />
            <span className="block mt-2 text-gray">Mesa</span>
          </IconButton>
          <IconButton>
            <IconWall cor={color} size={size} />
            <span className="block mt-2 text-gray">Parede</span>
          </IconButton>
          <IconButton>
            <IconFloor cor={color} size={size} />
            <span className="block mt-2 text-gray">Piso</span>
          </IconButton>
          <IconButton>
            <IconRoof cor={color} size={size} />
            <span className="block mt-2 text-gray">Teto</span>
          </IconButton>
          <IconButton>
            <IconGarden cor={color} size={size} />
            <span className="block mt-2 text-gray">Jardim</span>
          </IconButton>
          <IconButton>
            <IconOutside cor={color} size={size} />
            <span className="block mt-2 text-gray">Externo</span>
          </IconButton>
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
