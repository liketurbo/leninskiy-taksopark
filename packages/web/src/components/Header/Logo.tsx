import { Link } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"

const Logo = styled.h1`
  ${tw`text-lg uppercase`}
`

export default ({
  children,
  ...rest
}: {
  children: ReactNode
  className?: string
}) => (
  <Logo {...rest}>
    <Link to="/">{children}</Link>
  </Logo>
)
