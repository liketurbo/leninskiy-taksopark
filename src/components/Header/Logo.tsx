import { graphql, useStaticQuery } from "gatsby"
import React, { BaseHTMLAttributes } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import { Query } from "../../../types/graphqlTypes"
import useRouter from "../../hooks/useRouter"
import convertRemToPixels from "../../utils/convertRemToPixels"

const Logo = styled.h1`
  ${tw`text-lg font-semibold underline hover:no-underline`}
`

const Link = styled.div`
  ${tw`cursor-pointer`}
`

export default ({ ...rest }: BaseHTMLAttributes<any>) => {
  const { location } = useRouter()
  const data = useStaticQuery<Query>(graphql`
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

  const { brand } = data.site!.siteMetadata!.taxiData!

  return (
    <Logo {...rest}>
      {location.pathname === "/" ? (
        <AnchorLink offset={convertRemToPixels(3.5)} href="#start">
          {brand}
        </AnchorLink>
      ) : (
        <Link onClick={() => window.history.back()}>Назад</Link>
      )}
    </Logo>
  )
}
