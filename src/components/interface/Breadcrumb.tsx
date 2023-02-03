import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { capitalizeFirstLetter } from '../../utils/capitalize';

const BreadcrumbApp = () => {
  const router = useRouter();
  const path = decodeURI(router.asPath).split('/').filter(Boolean);

  return (
    <div className="bg-bg py-3 px-4">
      <div className="text-xs text-zinc-500">
        <Link href="/" passHref>
          <a className="py-2 px-4 bg-bg text-gray">Home</a>
        </Link>

        <span>/</span>

        {path?.map((str: string, index: number) => {
          const CapitalizedStr = capitalizeFirstLetter(str);

          return index === path.length - 1 ? (
            <span key={index} className="py-2 px-4 bg-bg text-gray">
              {CapitalizedStr}
            </span>
          ) : (
            <div key={index} className="float-left">
              <Link href={`/produtos/todos`} passHref={true}>
                <a className="py-2 px-4 bg-bg text-gray">{CapitalizedStr}</a>
              </Link>
              <span> / </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreadcrumbApp;
