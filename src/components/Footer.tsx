import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import { ContainerRaw } from "@-taxi-parks-ui/container"

import H2 from "./H/H2"
import Phone from "./Phone"

const SFooter = styled.footer`
  ${ContainerRaw}

  ${tw`bg-black text-white`}

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
      "address"
      "hours"
      "contacts"
      "policy";
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
  ${tw`flex flex-col items-start`}

  grid-area: contacts;
`

const Policy = styled.a`
  ${tw`underline hover:no-underline font-semibold text-lg`}

  align-self: flex-start;
  justify-self: flex-start;
`

const Email = styled.a`
  ${tw`underline hover:no-underline`}
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            address
            brand
            email
            owner
            workTime
          }
        }
      }
    }
  `)

  const {
    address,
    brand,
    email,
    owner,
    workTime,
  } = data.site.siteMetadata.taxiData

  return (
    <SFooter>
      <Info>
        <H2>{"О нас"}</H2>
        <p>{owner}</p>
        <p>{`© ${new Date().getFullYear()} ${brand}, Все права защищены.`}</p>
      </Info>
      <Policy href="/policy" target="_blank">
        {"Политика конфиденциальности"}
      </Policy>
      <Address>
        <H2>{"Адрес офиса"}</H2>
        <address style={{ fontStyle: "normal" }}>{address}</address>
      </Address>
      <Hours>
        <H2>{"Время работы"}</H2>
        <p>{workTime}</p>
      </Hours>
      <Contacts>
        <H2>{"Контакты"}</H2>
        <Email href={`mailto:${email}`}>{email}</Email>
        <Phone />
      </Contacts>
    </SFooter>
  )
}

export default Footer
