import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import { ContainerRaw } from "@-taxi-parks-ui/container"
import IconFacebook from "@-taxi-parks-ui/icon-facebook"
import IconInstagram from "@-taxi-parks-ui/icon-instagram"
import IconOk from "@-taxi-parks-ui/icon-ok"
import IconTelegram from "@-taxi-parks-ui/icon-telegram"
import IconTwitter from "@-taxi-parks-ui/icon-twitter"
import IconVk from "@-taxi-parks-ui/icon-vk"
import screens from "@-taxi-parks-ui/theme-screens"
import spacing from "@-taxi-parks-ui/theme-spacing"

import H2 from "./H/H2"
import Phone from "./Phone"

const SFooter = styled.footer`
  ${ContainerRaw}

  ${tw`bg-black text-white`}

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "info address"
    "social hours"
    "policy contacts";
  grid-gap: ${spacing["4"]};

  @media (max-width: ${screens.md}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "info"
      "address"
      "social"
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

const SocialLinks = styled.section`
  ${tw`flex`}

  grid-area: social;
  align-self: center;
`

const SLink = styled.a`
  ${tw`mr-2`}
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
      <SocialLinks>
        <SLink href="https://www.facebook.com" target="_blank">
          <IconFacebook />
        </SLink>
        <SLink href="https://twitter.com" target="_blank">
          <IconTwitter />
        </SLink>
        <SLink href="https://vk.com" target="_blank">
          <IconVk />
        </SLink>
        <SLink href="https://ok.ru" target="_blank">
          <IconOk />
        </SLink>
        <SLink href="https://telegram.org" target="_blank">
          <IconTelegram />
        </SLink>
        <SLink href="https://www.instagram.com" target="_blank">
          <IconInstagram />
        </SLink>
      </SocialLinks>
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
