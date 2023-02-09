import React from 'react';

interface textProps {
  text: string;
  textCenter?: boolean;
}

const TitleApp = ({ text, textCenter = true }: textProps) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl text-green ${
        textCenter && 'text-center'
      }`}
    >
      {text}
    </h1>
  );
};

export default TitleApp;
