import { GlobalStyles, css } from 'twin.macro';
import { Global } from '@emotion/react';
import HeadFonts from 'components/core/HeadFonts';

export default function LayoutWrapper({ children }) {
  return (
    <>
      <HeadFonts />
      <GlobalStyles />
      <Global
        styles={css`
          body,
          html {
            min-height: 100% !important;
            height: 100%;
            height: 100%;
          }

          .clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            max-height: 100px;
          }

          .highlight-gradient {
            background-image: linear-gradient(90deg, rgba(10, 0, 0, 0.6), rgba(0, 0, 0, 0));
          }

          .video-box {
            position: relative;
            padding-bottom: 52.25%;
            padding-top: 25px;
            height: 0px;
          }

          .video-box iframe {
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
          }
        `}
      />
      {children}
    </>
  );
}
