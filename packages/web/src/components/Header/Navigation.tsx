import { Link } from "gatsby"
import React, { BaseHTMLAttributes } from "react"
import styled from "styled-components"

import NavLink from "./NavLink"

const List = styled.ul`
  ${tw`flex flex-col items-center`} 

  @media (min-width: ${props => props.theme.screens.md})  {
    ${tw`flex-row`}
  }
`

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
          <Link to={path}>{title}</Link>
        </NavLink>
      ))}
    </List>
  </nav>
)
