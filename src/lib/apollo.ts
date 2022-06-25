import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4tw0rsp09v101un32gh2iyg/master',
  cache: new InMemoryCache()
})