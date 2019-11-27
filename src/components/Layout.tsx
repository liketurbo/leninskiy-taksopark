import PropTypes from "prop-types"
import React, { FC } from "react"
import styled from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const Padding = styled.div`
  ${tw`pt-14`}
`

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Padding>
      {children}
      <Footer />
    </Padding>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
