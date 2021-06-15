import {
  RelayNetworkLayer,
  cacheMiddleware,
  urlMiddleware,
  errorMiddleware
} from 'react-relay-network-modern/node8';
import RelaySSR from 'react-relay-network-modern-ssr/node8/client';
import { Environment, RecordSource, Store } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);

let storeEnvironment = null;

export default {
  createEnvironment: (relayData) => {
    if (storeEnvironment) return storeEnvironment;

    storeEnvironment = new Environment({
      store,
      network: new RelayNetworkLayer([
        // example of the custom inline middleware
        (next) => async (req) => {
          req.fetchOpts.body = req.fetchOpts.body.replace(/"id":(["'])(?:(?=(\\?))\2.)*?\1,/, '');
          return next(req);
        },
        cacheMiddleware({ size: 100, ttl: 60 * 1000 }),
        new RelaySSR(relayData).getMiddleware({ lookup: false }),
        // eslint-disable-next-line no-unused-vars
        urlMiddleware({ url: (req) => process.env.NEXT_PUBLIC_RELAY_ENDPOINT }),
        process.env.NODE_ENV === 'development' ? errorMiddleware() : null
      ])
    });

    return storeEnvironment;
  }
};
