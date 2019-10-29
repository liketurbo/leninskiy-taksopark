import React from "react"
import { Location } from "@reach/router"
import { ThemeProvider } from "styled-components"

import RouterContext from "./routerContext"
import theme from "./theme"

export default ({ element }) => (
  <ThemeProvider {...{ theme }}>
    <Location>
      {history => (
        <RouterContext.Provider value={history}>
          {element}
        </RouterContext.Provider>
      )}
    </Location>
  </ThemeProvider>
)
