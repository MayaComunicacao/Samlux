import Image from 'next/image';
import React from 'react';
import { Page_Acfimagembanner } from '../../generated/graphql';

const MapsHome = ({ mapa }: { mapa: Page_Acfimagembanner }) => {
  if (!mapa) return null;

  return (
    <div className="relative">
      <div className="hidden lg:block">
        <Image
          src={mapa.imagemParaDesktop?.sourceUrl || ''}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={mapa.imagemParaDesktop?.mediaDetails?.width || 0}
          height={mapa.imagemParaDesktop?.mediaDetails?.height || 0}
          alt="imagem mapa"
        />
      </div>

      <div className="block lg:hidden">
        <Image
          src={mapa.imagemParaMobile?.sourceUrl || ''}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={mapa.imagemParaMobile?.mediaDetails?.width || 0}
          height={mapa.imagemParaMobile?.mediaDetails?.height || 0}
          alt="imagem mapa"
        />
      </div>
    </div>
  );
};

export default MapsHome;
