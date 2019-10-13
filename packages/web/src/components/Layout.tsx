import React, { ReactNode } from "react"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper {
    ${tw`flex flex-col min-h-screen`}
  }
`

// "flex-1" used for "Sticky footer" (276 page from CSS Secrets)
// "max-w-4xl (56rem) and padding" used for "Fluid background, fixed content (288 page from CSS Secrets)"
const Content = styled.div`
  ${tw`flex-1`}
  
  padding: 0 calc(50% - ${props => props.theme.spacing["144"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;
`

export default ({ children }: { children: ReactNode }) => (
  <>
    <GlobalStyle />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)
