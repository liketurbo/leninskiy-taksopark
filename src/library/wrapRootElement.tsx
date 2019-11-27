import { ApolloProvider } from "@apollo/react-hooks"
import React, { ReactNode } from "react"

import apolloClient from "./apolloClient"
import { ToastProvider } from "./toast"

const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <ApolloProvider client={apolloClient}>
    <ToastProvider>{element}</ToastProvider>
  </ApolloProvider>
)

export default wrapRootElement
