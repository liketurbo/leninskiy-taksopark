import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { ThemeProvider } from "styled-components"

import theme from "./theme"
import apolloClient from "./apolloClient"
import { ToastProvider } from "./toastContext"

export default ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider {...{ theme }}>
      <ToastProvider>{element}</ToastProvider>
    </ThemeProvider>
  </ApolloProvider>
)
