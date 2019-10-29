import { Link } from "gatsby"
import React, { ReactNode } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import useRouter from "../../hooks/useRouter"
import convertRemToPixels from "../../utils/convertRemToPixels"

const Logo = styled.h1`
  ${tw`text-lg uppercase`}
`

export default ({
  children,
  ...rest
}: {
  children: ReactNode
  className?: string
}) => {
  const { location } = useRouter()

  return (
    <Logo {...rest}>
      {location.pathname === "/" ? (
        <AnchorLink offset={convertRemToPixels(3.5)} href="#start">
          {children}
        </AnchorLink>
      ) : (
        <Link to="/">{children}</Link>
      )}
    </Logo>
  )
}
