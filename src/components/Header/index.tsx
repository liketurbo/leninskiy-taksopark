import React, { useCallback, useState } from "react"
import styled from "styled-components"

import useScreenSize from "../../hooks/useScreenSize"
import { CSSContent } from "../Content"
import PPhone from "../Phone"
import PBurger from "./Burger"
import PLogo from "./Logo"
import PNavigation from "./Navigation"

const SHeader = styled.header`
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
  ${tw`flex md:hidden`}

  grid-area: burger;
  justify-self: end;
`

const Phone = styled(PPhone)`
  ${tw`my-4 md:my-0`}

  grid-area: phone;
`

const Header = () => {
  const mediumScreen = useScreenSize("md")
  const [navVisible, setNavVisible] = useState(false)

  const toggleNav = useCallback(() => {
    setNavVisible(!navVisible)
  }, [navVisible])

  return (
    <SHeader>
      <Logo />
      {(mediumScreen || navVisible) && (
        <>
          <Navigation
            links={[
              {
                path: "#conditions",
                title: "Условия",
              },
              {
                path: "#requirements",
                title: "Требования",
              },
              {
                path: "#connection",
                title: "Подключение",
              },
              {
                path: "#contacts",
                title: "Контакты",
              },
            ]}
          />
          <Phone />
        </>
      )}
      <Burger onClick={toggleNav} />
    </SHeader>
  )
}

export default Header
