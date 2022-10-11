import React from 'react';

interface textProps {
  text: string;
}

const TitleApp = ({ text }: textProps) => {
  return (
    <h1 className="text-2xl sm:text-3xl text-center text-green">{text}</h1>
  );
};

export default TitleApp;
