import { useCallback, useEffect, useState } from "react"

import screens from "@-taxi-parks-ui/theme-screens"

export default (screenSize: "sm" | "md" | "lg" | "xl") => {
  const [screen, setScreen] = useState(false)

  const mediaQueryChange = useCallback((mediaQuery: MediaQueryListEvent) => {
    setScreen(mediaQuery.matches)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${screens[screenSize]})`)

    mediaQuery.addListener(mediaQueryChange)
    mediaQueryChange(mediaQuery as any)

    return () => mediaQuery.removeEventListener("change", mediaQueryChange)
  }, [mediaQueryChange, screenSize])

  return screen
}
