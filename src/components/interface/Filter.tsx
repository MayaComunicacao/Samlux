import React from 'react';
import AccordionApp from './Accordion';

const CategoriesApp = [
  {
    category: 'Mesa',
    options: ['opcao 1', 'opcao 2', 'opcao 3']
  },
  {
    category: 'Parede',
    options: ['opcao 1', 'opcao 2', 'opcao 3']
  },
  {
    category: 'Piso',
    options: ['opcao 1', 'opcao 2', 'opcao 3']
  },
  {
    category: 'Teto',
    options: ['opcao 1', 'opcao 2', 'opcao 3']
  },
  {
    category: 'Jardim',
    options: ['opcao 1', 'opcao 2', 'opcao 3']
  },
  {
    category: 'Externo',
    options: ['opcao 1', 'opcao 2', 'opcao 3']
  }
];

const FilterApp = () => {
  return (
    <div className="sm:pr-6">
      <div className="border border-zinc-300 py-4 px-4 mb-8">
        <p>Filtros selecionados</p>
      </div>
      {CategoriesApp.map((item, index) => {
        return (
          <AccordionApp
            key={index}
            title={item.category}
            content={item.options}
          />
        );
      })}
    </div>
  );
};

export default FilterApp;
