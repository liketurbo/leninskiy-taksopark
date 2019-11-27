import { useContext } from "react"

import { toastContext } from "../library/toast"

export default () => {
  const toast = useContext(toastContext)

  return toast
}
