import React, { ReactNode } from "react"
import { Transition, TransitionGroup } from "react-transition-group"
import { TransitionStatus } from "react-transition-group/Transition"
import styled from "styled-components"

import useRouter from "../hooks/useRouter"

const Animation = styled.div<{
  state: TransitionStatus
}>`
  transition: opacity 0.15s ease;
  opacity: ${({ state }) => {
    switch (state) {
      case "entering":
        return 0
      case "entered":
        return 1
      case "exiting":
        return 0
      case "exited":
        return 1
      default:
        return 1
    }
  }};
`

export default ({ children }: { children: ReactNode }) => {
  const { location } = useRouter()

  return (
    <TransitionGroup>
      <Transition key={location.pathname} timeout={150}>
        {state => <Animation {...{ state }}>{children}</Animation>}
      </Transition>
    </TransitionGroup>
  )
}
