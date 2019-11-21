import { graphql, useStaticQuery } from "gatsby"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import React, { AnchorHTMLAttributes } from "react"
import styled from "styled-components"

const Link = styled.a`
  ${tw`underline hover:no-underline`}
`

const Phone = ({ ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const data = useStaticQuery(graphql`
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

  const { phone } = data.site.siteMetadata.taxiData

  return (
    <Link href={parsePhoneNumberFromString(phone).getURI()} {...rest}>
      {parsePhoneNumberFromString(phone).formatNational()}
    </Link>
  )
}

export default Phone
