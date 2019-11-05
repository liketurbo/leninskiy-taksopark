import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { Location } from "@reach/router"
import { ThemeProvider } from "styled-components"

import RouterContext from "./routerContext"
import theme from "./theme"
import apolloClient from "./apolloClient"
import { ToastProvider } from "./toastContext"

export default ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider {...{ theme }}>
      <Location>
        {history => (
            <ToastProvider>{element}</ToastProvider>
        )}
      </Location>
    </ThemeProvider>
  </ApolloProvider>
)
