import React, { ReactNode } from "react"
import styled from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const Padding = styled.div`
  ${tw`pt-14`}
`

export default ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <Padding>{children}</Padding>
    <Footer />
  </>
)
