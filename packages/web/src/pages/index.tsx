import React from "react"

import Contacts from "../components/Contacts"
import Layout from "../components/Layout"
import Learning from "../components/Learning"
import Questions from "../components/Questions"
import SEO from "../components/SEO"
import Services from "../components/Services"
import TaxiPark from "../components/TaxiPark"
import WorkStart from "../components/WorkStart"

export default () => (
  <Layout>
    <SEO title="Главная" />
    <WorkStart />
    <Services />
    <TaxiPark />
    <Learning />
    <Questions />
    <Contacts />
  </Layout>
)
