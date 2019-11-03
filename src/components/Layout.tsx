import React, { ReactNode } from "react"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./Footer"
import Header from "./Header"
import Transition from "./Transition"

const Padding = styled.div`
  ${tw`pt-14`}
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
    <Padding>
      <Transition>
        {children}
        <Footer />
      </Transition>
    </Padding>
  </>
)
