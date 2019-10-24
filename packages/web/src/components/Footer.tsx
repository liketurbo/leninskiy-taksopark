import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import React from "react"
import styled from "styled-components"

import { Query } from "../../types/graphqlTypes"
import { CSSContent } from "./Content"
import H2 from "./H/H2"

const Footer = styled.footer`
  ${CSSContent}

  ${tw`bg-black text-white m-0 py-4`}

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "info address"
    "info hours"
    "policy contacts";
  grid-gap: ${props => props.theme.spacing["4"]};

  @media (max-width: ${props => props.theme.screens.md}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "info"
      "info"
      "info"
      "address"
      "hours"
      "contacts";
  }
`

const Info = styled.section`
  grid-area: info;
`

const Address = styled.section`
  grid-area: address;
`

const Hours = styled.section`
  grid-area: hours;
`

const Contacts = styled.section`
  grid-area: contacts;
`

const Policy = styled(GatsbyLink)`
  ${tw`underline hover:no-underline font-semibold text-lg`}

  justify-self: flex-start;
`

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

  const {
    address,
    brand,
    email,
    inn,
    number,
    owner,
    workTime,
  } = data.site!.siteMetadata!.taxiData!

  return (
    <Footer>
      <Info>
        <H2>О нас</H2>
        <p>{owner}</p>
        <p>ИНН: {inn}</p>
        <p>
          © {new Date().getFullYear()} {brand}, Все права защищены.
        </p>
      </Info>
      <Policy to="/policy">Политика конфиденциальности</Policy>
      <Address>
        <H2>Адрес офиса</H2>
        <address style={{ fontStyle: "normal" }}>{address}</address>
      </Address>
      <Hours>
        <H2>Время работы</H2>
        <p>{workTime}</p>
      </Hours>
      <Contacts>
        <H2>Контакты</H2>
        <Link href={`mailto:${email}`}>{email}</Link>
        <br />
        <Link href={parsePhoneNumberFromString(number!)!.getURI()}>
          {parsePhoneNumberFromString(number!)!.formatNational()}
        </Link>
      </Contacts>
    </Footer>
  )
}
