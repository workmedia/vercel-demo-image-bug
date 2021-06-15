import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head />
        <body>
          <Main />
          <div id="sidemenu" />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
