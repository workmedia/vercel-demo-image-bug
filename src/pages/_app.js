import { LayoutWrapper, ProviderWrapper } from 'wrappers';

function App({ Component, pageProps }) {
  return (
    <ProviderWrapper pageProps={pageProps}>
      <LayoutWrapper isPreview={pageProps?.isPreview ?? false}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ProviderWrapper>
  );
}

export default App;
