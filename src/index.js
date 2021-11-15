import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Dogs app uri
//uri: "https://71z1g.sse.codesandbox.io/",
// Todo app uri
// uri: "https://sxewr.sse.codesandbox.io/",

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://sxewr.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
