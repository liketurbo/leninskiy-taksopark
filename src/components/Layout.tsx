import PropTypes from "prop-types"
import React, { FC } from "react"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const Padding = styled.div`
  ${tw`pt-14`}
`

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper {
    ${tw`flex flex-col min-h-screen`}
  }
`

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Padding>
      {children}
      <Footer />
    </Padding>
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
