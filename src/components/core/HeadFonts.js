import Head from 'next/head';

export default function HeadFonts() {
  return (
    <Head key="googlefonts">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
