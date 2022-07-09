import React from 'react';
import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="ECommerce - Amazona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
