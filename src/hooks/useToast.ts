import { useContext } from "react"

import toastContext from "../library/toastContext"

export default () => {
  const toast = useContext(toastContext)

  return toast
}
