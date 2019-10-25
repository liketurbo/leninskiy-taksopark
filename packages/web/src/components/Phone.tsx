import { graphql, useStaticQuery } from "gatsby"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import React, { AnchorHTMLAttributes } from "react"
import styled from "styled-components"

import { Query } from "../../types/graphqlTypes"

const Link = styled.a`
  ${tw`underline hover:no-underline`}
`

export default ({ ...rest }: AnchorHTMLAttributes<any>) => {
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
    <Link href={parsePhoneNumberFromString(phone!)!.getURI()} {...rest}>
      {parsePhoneNumberFromString(phone!)!.formatNational()}
    </Link>
  )
}
