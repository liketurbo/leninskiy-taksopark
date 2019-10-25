import { graphql, useStaticQuery } from "gatsby"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import React from "react"
import styled from "styled-components"

import { Query } from "../../types/graphqlTypes"

const Link = styled.a`
  ${tw`underline hover:no-underline`}
`

export default () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            phone
          }
        }
      }
    }
  `)

  const { phone } = data.site!.siteMetadata!.taxiData!

  return (
    <Link href={parsePhoneNumberFromString(phone!)!.getURI()}>
      {parsePhoneNumberFromString(phone!)!.formatNational()}
    </Link>
  )
}
