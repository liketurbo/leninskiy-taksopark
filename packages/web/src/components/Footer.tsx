import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  ${tw`font-semibold text-lg`}
`

const Footer = styled.footer`
  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;

  ${tw`bg-black text-white py-4`}

  display: grid;
  grid-template-areas:
    "info address"
    "info hours"
    "policy contacts";
  grid-gap: ${props => props.theme.spacing["4"]};

  @media (max-width: ${props => props.theme.screens.sm}) {
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

  grid-area: policy;

  display: contents;
`

const Link = styled.a`
  ${tw`underline hover:no-underline`}

  display: contents;
`

export default () => {
  const {
    site: {
      siteMetadata: { taxiData: data },
    },
  } = useStaticQuery(graphql`
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
          }
        }
      }
    }
  `)

  return (
    <Footer>
      <Info>
        <Title>О нас</Title>
        <p>ООО "{data.brand}"</p>
        <p>ИНН: {data.inn}</p>
        <p>
          © {new Date().getFullYear()} {data.brand}, Все права защищены.
        </p>
      </Info>
      <Policy to="/policy">Политика конфиденциальности</Policy>
      <Address>
        <Title>Адрес офиса</Title>
        <address style={{ fontStyle: "normal" }}>{data.address}</address>
      </Address>
      <Hours>
        <Title>Время работы</Title>
        <p>{data.workTime}</p>
      </Hours>
      <Contacts>
        <Title>Контакты</Title>
        <Link href={`mailto:${data.email}`}>{data.email}</Link>
        <br />
        <Link href={parsePhoneNumberFromString(data.number)!.getURI()}>
          {parsePhoneNumberFromString(data.number)!.formatNational()}
        </Link>
      </Contacts>
    </Footer>
  )
}
