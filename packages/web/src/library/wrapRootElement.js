import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"

export default ({ element }) => (
  <ThemeProvider {...{ theme }}>{element}</ThemeProvider>
)
