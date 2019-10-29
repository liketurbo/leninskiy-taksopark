import { graphql, useStaticQuery } from "gatsby"
import React, { useCallback, useState } from "react"
import styled from "styled-components"

import { Query } from "../../../types/graphqlTypes"
import useScreenSize from "../../hooks/useScreenSize"
import { CSSContent } from "../Content"
import PPhone from "../Phone"
import PBurger from "./Burger"
import PLogo from "./Logo"
import PNavigation from "./Navigation"

const Header = styled.header`
  ${CSSContent}

  ${tw`bg-white py-0 shadow fixed z-20`}
  
  top: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-areas:
    "logo burger"
    "nav nav"
    "phone phone";
  grid-template-rows: ${props => props.theme.spacing["14"]};
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;

  @media (min-width: ${props => props.theme.screens.md}) {
    grid-template-areas: "logo nav phone";
    grid-template-columns: auto 1fr auto;
  }
`

const Logo = styled(PLogo)`
  grid-area: logo;
  justify-self: start;
`

const Navigation = styled(PNavigation)`
  grid-area: nav;
`

const Burger = styled(PBurger)`
  ${tw`flex`}

  grid-area: burger;
  justify-self: end;

  @media (min-width: ${props => props.theme.screens.md}) {
    ${tw`hidden`}
  }
`

const Phone = styled(PPhone)`
  ${tw`my-4 md:my-0`}

  grid-area: phone;
`

export default () => {
  const mediumScreen = useScreenSize("md")
  const [navVisible, setNavVisible] = useState(false)

  const toggleNav = useCallback(() => {
    setNavVisible(!navVisible)
  }, [navVisible])

  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            brand
          }
        }
      }
    }
  `)

  const { brand } = data.site!.siteMetadata!.taxiData!

  return (
    <Header>
      <Logo>{brand}</Logo>
      {(mediumScreen || navVisible) && (
        <>
          <Navigation
            links={[
              { title: "Условия", path: "#conditions" },
              { title: "Требования", path: "#requirements" },
              { title: "Подключение", path: "/connection" },
              { title: "Контакты", path: "#contacts" },
            ]}
          />
          <Phone />
        </>
      )}
      <Burger onClick={toggleNav} />
    </Header>
  )
}
