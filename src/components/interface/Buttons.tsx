import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useBudget } from '../context/context';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

interface PageProps {
  page: string;
  title: string;
  codigo: string;
  img: string | null;
  slug: string;
  uri: string;
  volts: string;
  numwhatsapp: {
    numeroWhatsapp: string;
    mensagemWhatsapp: string;
  };
}

const ButtonsApp = ({
  page,
  title,
  slug,
  codigo,
  img = null,
  uri,
  volts,
  numwhatsapp
}: PageProps) => {
  const { addBudget } = useBudget();
  const [counter, setCounter] = useState(1);

  const router = useRouter();

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounter(Number(e.target.value));
  };

  const Notify = useCallback(
    (qnt: number) => toast(`produto incluído: quantidade ${qnt}`),
    []
  );

  const handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addBudget({
      title,
      codigo,
      img,
      slug,
      quantidade: counter,
      uri: uri,
      volts: volts
    });

    Notify(counter);
  };

  useEffect(() => setCounter(1), [router]);

  const numFormatted = numwhatsapp?.numeroWhatsapp?.replace(
    /\D/g,
    ''.replace(/\s\n/g, '')
  );

  const msg = numwhatsapp?.mensagemWhatsapp;
  const url = `https://api.whatsapp.com/send?phone=${numFormatted}&text=${msg}`;

  if (page === 'category') {
    return (
      <div className="flex py-2 ">
        <div className="flex w-[100px]">
          <button
            className="w-[33%] bg-bg text-gray hover:bg-green hover:text-white text-xl"
            onClick={decrease}
          >
            -
          </button>
          <input
            type="text"
            maxLength={2}
            value={counter}
            onChange={HandleInput}
            placeholder="1"
            className="w-[33%] text-center border-y border-y-bg"
          />
          <button
            className="w-[33%] bg-bg text-gray hover:bg-green hover:text-white text-xl"
            onClick={increase}
          >
            +
          </button>
        </div>
        <button
          onClick={handleClickAdd}
          className="py-1 px-3 mx-1 text-xs uppercase bg-green text-white w-[calc(50%_-_50px)]"
        >
          Orçar
        </button>
        <Link href={uri}>
          <a className="py-1 px-3 text-xs text-center uppercase bg-bg text-gray w-[calc(50%_-_50px)] leading-5">
            Visualizar
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="lg:flex py-2 mt-8 w-full">
        <div className="flex w-full lg:w-1/2">
          <div className="flex w-1/2 sm:w-[140px]">
            <button
              className="w-[33%] bg-bg text-gray hover:bg-green hover:text-white text-xl"
              onClick={decrease}
            >
              -
            </button>
            <input
              type="text"
              maxLength={2}
              value={counter}
              onChange={HandleInput}
              placeholder="1"
              className="w-[33%] text-center border-y border-y-bg"
            />
            <button
              className="w-[33%] bg-bg text-gray hover:bg-green hover:text-white text-xl"
              onClick={increase}
            >
              +
            </button>
          </div>
          <button
            onClick={handleClickAdd}
            className="py-3 px-4 ml-1 text-lg uppercase bg-green text-white w-1/2 sm:w-[calc(100%_-_140px)]"
          >
            Orçar
          </button>
        </div>

        <Link href={url ? url : ''} passHref target="_blank">
          <a className="py-3 px-4 mt-2 lg:mt-0 sm:ml-1 text-lg uppercase bg-graylight text-gray hover:bg-green text-center hover:text-white block lg:inline-block w-full lg:w-1/2">
            Falar com um consultor
          </a>
        </Link>
      </div>
    );
  }
};

export default ButtonsApp;
