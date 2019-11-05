import produce from "immer"
import React, { createContext, FC, Reducer, useReducer } from "react"

import Toast, { Variant } from "../components/Toast"

const toastContext = createContext({
  show: (msg: any, variant: Variant) => {},
})

type State = { show: boolean; msg: string; variant?: Variant }

const reducer: Reducer<
  State,
  {
    type: "success" | "danger" | "off"
    payload?: string
  }
> = (state, action) =>
  produce(state, draft => {
    if (action.payload) draft.msg = action.payload

    switch (action.type) {
      case "success":
        draft.variant = "success"
        draft.show = true
        return draft
      case "danger":
        draft.variant = "danger"
        draft.show = true
        return draft
      case "off":
        draft.show = false
        return draft
      default:
        return draft
    }
  })

export const ToastProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { show: false, msg: "" })

  return (
    <toastContext.Provider
      value={{
        show: (msg, variant) => {
          dispatch({ type: variant, payload: msg })
          setTimeout(() => dispatch({ type: "off" }), 3000)
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

export default toastContext
