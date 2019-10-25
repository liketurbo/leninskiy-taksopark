import React, { BaseHTMLAttributes, useState } from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  ${tw`cursor-pointer flex flex-col justify-around w-4 h-4`}
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

export default ({ onClick, ...rest }: BaseHTMLAttributes<any>) => {
  const [active, setActive] = useState(false)

  return (
    <Container
      onClick={event => {
        setActive(!active)
        onClick && onClick(event)
      }}
      {...rest}
    >
      <FirstBar {...{ active }} />
      <SecondBar {...{ active }} />
      <ThirdBar {...{ active }} />
    </Container>
  )
}
