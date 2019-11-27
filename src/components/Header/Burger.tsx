import React, { BaseHTMLAttributes, useState } from "react"
import styled, { css } from "styled-components"

import spacing from "@-taxi-parks-ui/theme-spacing"

const Container = styled.div`
  ${tw`relative cursor-pointer flex flex-col justify-around w-4 h-4`} ::before {
    ${tw`absolute`}

    content: "";

    top: -${spacing[4]};
    right: -${spacing[4]};
    bottom: -${spacing[4]};
    left: -${spacing[4]};
  }
`

const Bar = styled.div<{ active: boolean }>`
  ${tw`bg-black w-full h-1/12`}

  transform-origin: 5% center;
  transition: all 0.15s ease;
`

const FirstBar = styled(Bar)`
  ${props =>
    props.active &&
    css`
      transform: rotate(45deg) translate(10%, -85%);
    `}
`
const SecondBar = styled(Bar)`
  ${tw`opacity-100`}

  ${props =>
    props.active &&
    css`
      ${tw`opacity-0`}
      transform: translateX(-100%);
    `}
`
const ThirdBar = styled(Bar)`
  ${props =>
    props.active &&
    css`
      transform: rotate(-45deg) translate(10%, 85%);
    `}
`

const Burger = ({ onClick, ...rest }: BaseHTMLAttributes<HTMLDivElement>) => {
  const [active, setActive] = useState(false)

  return (
    <Container
      onClick={event => {
        setActive(!active)

        if (onClick) onClick(event)
      }}
      {...rest}
    >
      <FirstBar {...{ active }} />
      <SecondBar {...{ active }} />
      <ThirdBar {...{ active }} />
    </Container>
  )
}

export default Burger
