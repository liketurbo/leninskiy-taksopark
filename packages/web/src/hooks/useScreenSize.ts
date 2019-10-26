import { useCallback, useEffect, useState } from "react"

import theme from "../library/theme"

export default (screenSize: "sm" | "md" | "lg" | "xl") => {
  const [screen, setScreen] = useState(false)

  const mediaQueryChange = useCallback(
    (mediaQuery: MediaQueryListEvent) => {
      setScreen(mediaQuery.matches)
    },
    [screen]
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${theme.screens[screenSize]})`
    )

    mediaQuery.addListener(mediaQueryChange)
    mediaQueryChange(mediaQuery as any)

    return () => mediaQuery.removeEventListener("change", mediaQueryChange)
  }, [])

  return screen
}
