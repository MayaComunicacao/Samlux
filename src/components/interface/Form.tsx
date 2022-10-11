import Link from 'next/link';
import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

export const FormsContact = () => {
  return (
    <form action="" method="post" className="py-8">
      <input type="text" name="name" placeholder="Nome" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="tel" name="fone" placeholder="Telefone" />
      <input type="text" name="city" placeholder="Cidade" />
      <input type="submit" name="submit" value="Falar com o time" />
    </form>
  );
};

export const FormsWork = () => {
  return (
    <form action="" method="post" className="py-8">
      <input type="text" name="name" placeholder="Nome" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="tel" name="fone" placeholder="Telefone" />
      <input type="text" name="city" placeholder="Cidade" />
      <div className="flex">
        <label
          htmlFor="teste"
          className="bg-transparent border border-gray color-gray w-1/2 text-center h-[47px] py-[10px] px-4 cursor-pointer"
        >
          <input id="teste" type="file" className="hidden" />
          Anexo
        </label>
        <input
          type="submit"
          name="submit"
          value="Quero fazer parte do time"
          className="ml-3"
        />
      </div>
    </form>
  );
};

export const FormsCustom = () => {
  return (
    <form action="" method="post" className="py-8">
      <input type="text" name="name" placeholder="Nome" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="tel" name="fone" placeholder="Telefone" />
      <input type="text" name="city" placeholder="Cidade" />
      <textarea name="msg"></textarea>
      <div className="w-full flex items-center bg-green text-white justify-center py-3 px-4">
        <RiWhatsappFill size={30} />
        <Link href="https://api.whatsapp.com/send?phone=5517900000000">
          <a className="ml-2 text-lg">Falar com um especialista</a>
        </Link>
      </div>
    </form>
  );
};
