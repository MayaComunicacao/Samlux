import Link from 'next/link';
import React from 'react';

const BreadcrumbApp = ({ path }: any) => {
  return (
    <div className="bg-bg py-3 px-4">
      <p className="text-xs text-zinc-500">
        <Link href="/" passHref>
          <a className="py-2 px-4 bg-bg text-gray">Home</a>
        </Link>
        <span>/</span>
        <Link href="/produtos/todos">
          <a className="py-2 px-4 bg-bg text-gray">Produtos</a>
        </Link>
        <span>/</span>
        <a className="py-2 px-4">{path}</a>
      </p>
    </div>
  );
};

export default BreadcrumbApp;
