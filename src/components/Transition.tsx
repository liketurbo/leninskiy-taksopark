import React, { ReactNode } from "react"
import { Transition, TransitionGroup } from "react-transition-group"

import useRouter from "../hooks/useRouter"

const timeout = 150
const getTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease`,
    opacity: 0,
  },
} as any

export default ({ children }: { children: ReactNode }) => {
  const { location } = useRouter()

  return (
    <TransitionGroup>
      <Transition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {status => (
          <div
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </TransitionGroup>
  )
}
