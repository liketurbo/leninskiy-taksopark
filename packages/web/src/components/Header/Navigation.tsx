import { Link } from "gatsby"
import React, { BaseHTMLAttributes } from "react"
// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import NavLink from "./NavLink"

const List = styled.ul`
  ${tw`flex flex-col items-center`} 

  @media (min-width: ${props => props.theme.screens.md})  {
    ${tw`flex-row`}
  }
`

const convertRemToPixels = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize)

export default ({
  links,
  ...rest
}: {
  links: { title: string; path: string }[]
} & BaseHTMLAttributes<any>) => (
  <nav {...rest}>
    <List>
      {links.map(({ path, title }) => (
        <NavLink key={path}>
          {path.startsWith("#") ? (
            <AnchorLink offset={convertRemToPixels(3.5)} href={path}>
              {title}
            </AnchorLink>
          ) : (
            <Link to={path}>{title}</Link>
          )}
        </NavLink>
      ))}
    </List>
  </nav>
)
