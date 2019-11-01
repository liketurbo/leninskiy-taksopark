import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { Location } from "@reach/router"
import { ThemeProvider } from "styled-components"

import RouterContext from "./routerContext"
import theme from "./theme"
import apolloClient from "./apolloClient"

export default ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider {...{ theme }}>
      <Location>
        {history => (
          <RouterContext.Provider value={history}>
            {element}
          </RouterContext.Provider>
        )}
      </Location>
    </ThemeProvider>
  </ApolloProvider>
)
