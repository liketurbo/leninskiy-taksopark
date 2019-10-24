import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import NavLink from "./NavLink"

const List = styled.ul`
  ${tw`flex`}
`

export default ({
  links,
  className,
}: {
  links: { title: string; path: string }[]
  className?: string
}) => (
  <nav {...{ className }}>
    <List>
      {links.map(({ path, title }) => (
        <NavLink key={path}>
          <Link to={path}>{title}</Link>
        </NavLink>
      ))}
    </List>
  </nav>
)
