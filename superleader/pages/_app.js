import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/appolloClient";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
      <ApolloProvider client={apolloClient}>
        <div>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
  );
}
