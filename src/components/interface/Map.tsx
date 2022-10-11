import React from 'react';

const MapApp = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.3977846179055!2d-49.381762584453924!3d-20.815637571834266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc52c081f4441b%3A0x310426a20e521bfb!2zU2FtbHV4IC0gSWx1bWluYcOnw6NvLCBEZWNvcmHDp8OjbyBlIERlc2lnbg!5e0!3m2!1spt-BR!2sbr!4v1664481492460!5m2!1spt-BR!2sbr"
      width="100%"
      height="400px"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapApp;
