import PropTypes from "prop-types"
import React, { createContext, FC, Reducer, useReducer } from "react"

import Toast, { Variant } from "../components/Toast"

const toastContext = createContext<{
  show: (msg: string, variant: Variant) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}>(null as any)

type State = {
  msg?: string
  show: boolean
  variant?: Variant
}

const reducer: Reducer<
  State,
  {
    payload?: string
    type: "success" | "danger" | "off"
  }
> = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        msg: action.payload,
        show: true,
        variant: "success",
      }
    case "danger":
      return {
        msg: action.payload,
        show: true,
        variant: "danger",
      }
    case "off":
      return {
        show: false,
      }

    default:
      return state
  }
}

const ToastProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    msg: "",
    show: false,
  })

  return (
    <toastContext.Provider
      value={{
        show: (msg, variant) => {
          dispatch({
            payload: msg,
            type: variant,
          })
          setTimeout(
            () =>
              dispatch({
                type: "off",
              }),
            3000
          )
        },
      }}
    >
      {children}
      <Toast show={state.show} variant={state.variant}>
        {state.msg}
      </Toast>
    </toastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { toastContext, ToastProvider }
