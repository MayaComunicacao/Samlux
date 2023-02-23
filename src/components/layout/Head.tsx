import React from 'react';
import Head from 'next/head';

const HeadApp = () => {
  return (
    <Head>
      <title>Samlux</title>
      <meta
        name="description"
        content="Samlux - Iluminação, Decoração, Design e Sofisticação."
      />
      <meta property="og:title" content="Samlux" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.samlux.com.br" />
      <meta property="og:image" content="https://samlux.com.br/logo.jpg" />
      <meta
        property="og:image:secure_url"
        content="https://samlux.com.br/logo.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:image:alt"
        content="Samlux - Iluminação, Decoração, Design e Sofisticação.t"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );
};

export default HeadApp;
