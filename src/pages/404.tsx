import escape from "escape-html"
import React from "react"

const Page404 = () => (
  <>
    <h1>{"NOT FOUND"}</h1>
    <p>{`You just hit a route that doesn${escape(
      "'"
    )}t exist... the sadness.`}</p>
  </>
)

export default Page404
