import React, { ReactNode } from "react"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const Padding = styled.div`
  ${tw`pt-14 flex-1`}
`

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper {
    ${tw`flex flex-col min-h-screen`}
  }
`

export default ({ children }: { children: ReactNode }) => (
  <>
    <GlobalStyle />
    <Header />
    <Padding>{children}</Padding>
    <Footer />
  </>
)
