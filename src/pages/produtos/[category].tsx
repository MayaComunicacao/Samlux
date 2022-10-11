import { NextPage } from 'next';
import React from 'react';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import FilterApp from '../../components/interface/Filter';
import ProductApp from '../../components/interface/Product';

const Products: NextPage = () => {
  return (
    <div className="container">
      <BreadcrumbApp />
      <div className="pt-8 pb-14 block lg:flex">
        <div className="w-full lg:w-[280px] lg:mt-14">
          <FilterApp />
        </div>
        <div className="w-full lg:w-[calc(100%_-_280px)]">
          <h1 className="text-3xl text-gray mb-5">Todos os produtos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-6">
            <ProductApp />
            <ProductApp />
            <ProductApp />
            <ProductApp />
            <ProductApp />
            <ProductApp />
            <ProductApp />
            <ProductApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
