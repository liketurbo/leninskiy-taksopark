import React, { LiHTMLAttributes } from "react"
import styled from "styled-components"

const SNavLink = styled.li`
  ${tw`mx-1`}

  > a {
    ${tw`px-2 pb-4 text-black hover:text-red border-b-0 md:border-b-2 border-transparent hover:border-red`}

    transition: all 0.15s ease;
  }

  :last-child {
    ${tw`m-0`}
  }
`

const NavLink = ({ ...rest }: LiHTMLAttributes<HTMLLIElement>) => (
  <SNavLink {...rest} />
)

export default NavLink
