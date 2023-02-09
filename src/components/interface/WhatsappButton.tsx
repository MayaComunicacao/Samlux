import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { Whatsapp_NumWhatsapp } from '../../generated/graphql';

interface IProps {
  numwhatsapp: Whatsapp_NumWhatsapp;
}

const WhatsappButton = ({ numwhatsapp }: IProps) => {
  if (!numwhatsapp) return null;

  const numFormatted = numwhatsapp?.numeroWhatsapp?.replace(
    /\D/g,
    ''.replace(/\s\n/g, '')
  );

  const msg = numwhatsapp?.mensagemWhatsapp;

  const url = `https://api.whatsapp.com/send?phone=${numFormatted}&text=${msg}`;

  return (
    <div className="fixed bottom-[30px] right-[30px] bg-white rounded-[100%] shadow-xl z-50">
      <a href={url}>
        <BsWhatsapp size={40} color="#25D366" />
      </a>
    </div>
  );
};

export default WhatsappButton;
