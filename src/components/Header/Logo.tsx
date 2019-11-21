import { graphql, useStaticQuery } from "gatsby"
import React, { BaseHTMLAttributes } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import convertRemToPixels from "../../utils/convertRemToPixels"

const SLogo = styled.h1`
  ${tw`text-lg font-semibold underline hover:no-underline`}
`

const Logo = ({ ...rest }: BaseHTMLAttributes<HTMLHeadingElement>) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            brand
          }
        }
      }
    }
  `)

  const { brand } = data.site.siteMetadata.taxiData

  return (
    <SLogo {...rest}>
      <AnchorLink href="#start" offset={convertRemToPixels(3.5)}>
        {brand}
      </AnchorLink>
    </SLogo>
  )
}

export default Logo
