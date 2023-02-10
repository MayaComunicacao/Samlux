import React from 'react';

const MapsHome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="py-4 lg:py-0 space-y-2 lg:space-y-4">
        <p className="text-sm text-gray">São José do Rio Preto - SP</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.4000180950857!2d-49.38020690322534!3d-20.81554731484595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc52c081f4441b%3A0x310426a20e521bfb!2sSamlux%20-%20Projeto%2C%20Ilumina%C3%A7%C3%A3o%20e%20Design!5e0!3m2!1spt-BR!2sbr!4v1676057615338!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="py-4 lg:py-0 space-y-2 lg:space-y-4">
        <p className="text-sm text-gray">São Paulo - SP</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14623.48102621253!2d-46.6966236!3d-23.6089856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83c7804d0b1512da!2sD%26D%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1676060551574!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="py-4 lg:py-0 space-y-2 lg:space-y-4">
        <p className="text-sm text-gray">Cascavel - PR</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.0644018946155!2d-53.4716877!3d-24.9639234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d510c4ca524f%3A0xffeaa4ad017b65d!2sSamlux%20-%20Projeto%2C%20Ilumina%C3%A7%C3%A3o%20e%20Design!5e0!3m2!1spt-BR!2sbr!4v1676063835247!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapsHome;
