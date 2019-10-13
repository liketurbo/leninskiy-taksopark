import { Link } from "gatsby"
import React from "react"

import Contacts from "../components/Contacts"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby + Tailwind CSS + Styled Components site</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Contacts />
  </Layout>
)
