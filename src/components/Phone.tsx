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

  const parsedPhone = parsePhoneNumberFromString(phone)

  return parsedPhone ? (
    <Link href={parsedPhone.getURI()} {...rest}>
      {parsedPhone.formatNational()}
    </Link>
  ) : (
    <Link href="tel:+70000000000">{"8 (000) 000-00-00"}</Link>
  )
}

export default Phone
