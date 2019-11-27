import React, { BaseHTMLAttributes } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import screens from "@-taxi-parks-ui/theme-screens"

import convertRemToPixels from "../../utils/convertRemToPixels"
import NavLink from "./NavLink"

const List = styled.ul`
  ${tw`flex flex-col items-center`}

  @media (min-width: ${screens.md})  {
    ${tw`flex-row`}
  }
`

const Navigation = ({
  links,
  ...rest
}: {
  links: { title: string; path: string }[]
} & BaseHTMLAttributes<HTMLDivElement>) => (
  <nav {...rest}>
    <List>
      {links.map(({ path, title }) => (
        <NavLink key={path}>
          <AnchorLink href={path} offset={convertRemToPixels(3.5)}>
            {title}
          </AnchorLink>
        </NavLink>
      ))}
    </List>
  </nav>
)

export default Navigation
