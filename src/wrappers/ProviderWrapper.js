import { RelayEnvironmentProvider } from 'relay-hooks';
import { createEnvironment } from 'lib/createEnvironment';

export default function ProviderWrapper({ children, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={createEnvironment(pageProps?.relayData)}>
      {children}
    </RelayEnvironmentProvider>
  );
}
