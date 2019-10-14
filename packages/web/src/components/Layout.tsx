import React, { ReactNode } from "react"

import Footer from "./Footer"
import Header from "./Header"

export default ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
