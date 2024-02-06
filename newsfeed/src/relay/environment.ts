import type {FetchFunction, IEnvironment} from "relay-runtime";
import {Environment, Network, Observable, RecordSource, Store,} from "relay-runtime";
import fetchMultipart from 'fetch-multipart-graphql';

const fetchFn: FetchFunction = (params, variables) => {
  return Observable.create(sink => {
    fetchMultipart('/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'multipart/mixed; deferSpec=20220824, application/json'
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
      credentials: 'same-origin',
      onNext: parts => {
        parts.forEach(part => {
          if (part.incremental) {
            sink.next(part.incremental)
          } else {
            sink.next(part)
          }
        })
      },
      onError: err => sink.error(err),
      onComplete: () => sink.complete(),
    });
  });
};

export function createEnvironment(): IEnvironment {
  const network = Network.create(fetchFn);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}
