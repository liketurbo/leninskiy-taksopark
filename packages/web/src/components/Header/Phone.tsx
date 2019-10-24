import { graphql, useStaticQuery } from "gatsby"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import React from "react"
import styled from "styled-components"

import { Query } from "../../../types/graphqlTypes"

const Link = styled.a`
  ${tw`underline hover:no-underline`}
`

export default () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            address
            brand
            inn
            email
            number
            url
            workTime
            owner
          }
        }
      }
    }
  `)

  const { number } = data.site!.siteMetadata!.taxiData!

  return (
    <Link href={parsePhoneNumberFromString(number!)!.getURI()}>
      {parsePhoneNumberFromString(number!)!.formatNational()}
    </Link>
  )
}
