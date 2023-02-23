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
      <meta
        property="og:image"
        content="https://www.samlux.com.br/favicon.jpg"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );
};

export default HeadApp;
