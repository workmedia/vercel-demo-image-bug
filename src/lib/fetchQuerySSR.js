import { fetchQuery } from 'react-relay';
import { initEnvironment } from 'lib/createEnvironment';

export default async function fetchQuerySSR(query, variables) {
  const { environment, relaySSR } = initEnvironment();

  await fetchQuery(environment, query, variables).subscribe({});

  const relayData = (await relaySSR.getCache())?.[0];

  return !relayData ? null : [[relayData[0], relayData[1].json]];
}
