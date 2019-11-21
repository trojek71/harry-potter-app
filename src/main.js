/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
//import { createProvider } from "./vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import VueApollo, { ApolloProvider } from "vue-apollo";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "http://192.168.66.189:8080/v1/graphql"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: "#app",
  apolloProvider,
  render: h => h(App)
});
