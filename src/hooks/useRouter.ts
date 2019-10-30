import { useContext } from "react"

import routerContext from "../library/routerContext"

export default () => {
  const history = useContext(routerContext)

  return history
}
