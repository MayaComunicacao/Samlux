import React, { useCallback, useEffect, useState } from 'react';
import { getFieldsOfFilter } from '../../hooks/querys';

const FilterApp = () => {
  const [selectedFilters, setSelectedFilters] = useState<
    ISelectedFilters[] | []
  >([]);
  const [fields, setFields] = useState<IFieldsFilter[] | []>([]);

  const handleClickOnItemFilter = useCallback(
    ({ type, valueProp, category }: IHandleClickOnItemFilter) => {
      const isOnSelectedFilters = selectedFilters.findIndex(
        ({ value }) => value === valueProp
      );

      if (isOnSelectedFilters === -1) {
        setSelectedFilters((prev) => {
          return [
            ...prev,
            {
              type,
              value: valueProp,
              category: category
            }
          ];
        });
      } else {
        setSelectedFilters((prev) => {
          const prev_copy = [...prev];
          const newArr = prev_copy.filter(({ value }) => value !== valueProp);
          return newArr;
        });
      }
    },
    [selectedFilters]
  );

  const Checkbox = useCallback(({ checked }: { checked: boolean }) => {
    return (
      <div className="flex items-center justify-center w-[15px] h-[15px] border border-zinc-300 rounded-sm relative top-[3px] p-0.5">
        {checked && <span className="block w-full h-full bg-green" />}
      </div>
    );
  }, []);

  useEffect(() => {
    const getFields = async () => {
      const result = await getFieldsOfFilter();

      if (result) {
        const json = await result.json();

        const categories = {
          filter: {
            label: 'Categorias',
            type: 'categories',
            subItems: json?.data?.categories?.nodes?.map(
              (item: { name: string; slug: string }) => {
                return {
                  category: item.name,
                  value: item.slug
                };
              }
            )
          }
        };

        const fabricantes = {
          filter: {
            label: 'Fabricantes',
            type: 'manufacture',
            subItems: json?.data?.marcasExclusivas?.nodes?.map(
              (item: { title: string; marcaExclusivaId: number }) => {
                return {
                  category: item.title,
                  value: item.marcaExclusivaId.toString()
                };
              }
            )
          }
        };

        setFields([categories, fabricantes]);
      }
    };

    getFields();
  }, []);

  const ButtonFilter = useCallback(
    ({
      type,
      valueProp,
      subItem
    }: {
      type: string;
      valueProp: string;
      subItem: string;
    }) => {
      return (
        <div className="flex items-center">
          <button
            className="inline-flex items-center justify-center space-y-2 gap-2"
            onClick={() =>
              handleClickOnItemFilter({
                type,
                valueProp: valueProp,
                category: subItem
              })
            }
          >
            <Checkbox
              checked={
                selectedFilters.findIndex(
                  ({ value }) => value === valueProp
                ) !== -1
                  ? true
                  : false
              }
            />
            <span>{subItem}</span>
          </button>
        </div>
      );
    },
    [Checkbox, handleClickOnItemFilter, selectedFilters]
  );

  return (
    <div className="lg:sticky lg:top-2 sm:pr-6">
      <div className="border border-zinc-300 py-4 px-4 mb-8">
        <div>Filtros selecionados:</div>

        {selectedFilters?.map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              <ButtonFilter
                type={item.type}
                valueProp={item.value}
                subItem={item.category}
              />
            </div>
          );
        })}
      </div>

      {fields?.map((item, index) => {
        return (
          <div key={index} className="mb-4">
            <div>
              <h3 className="text-lg font-bold">{item.filter.label}:</h3>
            </div>

            {item.filter?.subItems?.map(
              (subItem: ISelectedFilters, index: number) => {
                if (
                  selectedFilters.findIndex(
                    ({ value }) => value === subItem.value
                  ) !== -1
                )
                  return null;

                return (
                  <div key={index} className="flex items-center">
                    <ButtonFilter
                      type={item.filter.type}
                      valueProp={subItem.value}
                      subItem={subItem.category}
                    />
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FilterApp;

interface ISelectedFilters {
  type: string;
  category: string;
  value: string;
}

type IFieldsFilter = {
  filter: {
    label: string;
    type: string;
    subItems: any;
  };
};

interface IHandleClickOnItemFilter {
  type: string;
  category: string;
  valueProp: string;
}
