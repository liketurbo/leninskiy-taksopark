import { Context, Provider } from "react"

import { LocationContext } from "@reach/router"

export const RouterProvider: Provider<LocationContext>

declare const context: Context<LocationContext>
export default context
