import React from "react"

import Contacts from "../components/Contacts"
import Layout from "../components/Layout"
import Learning from "../components/Learning"
import Questions from "../components/Questions"
import SEO from "../components/SEO"
import TaxiPark from "../components/TaxiPark"

export default () => (
  <Layout>
    <SEO title="Главная" />
    <TaxiPark />
    <Learning />
    <Questions />
    <Contacts />
  </Layout>
)
