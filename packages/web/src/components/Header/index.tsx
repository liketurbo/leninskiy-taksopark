import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import { Query } from "../../../types/graphqlTypes"
import { CSSContent } from "../Content"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Phone from "./Phone"

const Header = styled.header`
  ${CSSContent}

  ${tw`m-0 shadow h-14 fixed z-20 bg-white`}
  top: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "logo nav number";
  align-items: center;
  justify-items: center;
`

export default () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            address
            brand
            car
            city
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

  const { brand } = data.site!.siteMetadata!.taxiData!

  return (
    <Header>
      <Logo>{brand}</Logo>
      <Navigation
        links={[
          { title: "Условия", path: "/" },
          { title: "Требования", path: "/" },
          { title: "Подключение", path: "/" },
          { title: "Контакты", path: "/" },
        ]}
      />
      <Phone />
    </Header>
  )
}
