import { RelayNetworkLayer, urlMiddleware, authMiddleware } from 'react-relay-network-modern/node8';
import RelaySSR from 'react-relay-network-modern-ssr/node8/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Network, Environment, RecordSource, Store } from 'relay-runtime';

export default {
  initEnvironment: () => {
    const source = new RecordSource();
    const store = new Store(source);
    const relaySSR = new RelaySSR();

    return {
      relaySSR,
      environment: new Environment({
        store,
        network: new RelayNetworkLayer([
          // example of the custom inline middleware
          (next) => async (req) => {
            req.fetchOpts.body = req.fetchOpts.body.replace(/"id":(["'])(?:(?=(\\?))\2.)*?\1,/, '');
            return next(req);
          },
          urlMiddleware({ url: () => process.env.NEXT_PUBLIC_RELAY_ENDPOINT }),
          authMiddleware({ token: process.env.JWT_TOKEN }),
          relaySSR.getMiddleware()
        ])
      })
    };
  },
  createEnvironment: (relayData) => {
    const source = new RecordSource();
    const store = new Store(source);

    return new Environment({
      store,
      network: Network.create(() => relayData?.[0][1] || Promise.resolve())
    });
  }
};
