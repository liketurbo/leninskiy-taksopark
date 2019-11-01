import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export default new ApolloClient({
  uri: `${process.env.SERVER_URL}/graphql`,
  fetch,
})
