import React from "react"

import Conditions from "../components/Conditions"
import Connection from "../components/Connection"
import Contacts from "../components/Contacts"
import Layout from "../components/Layout"
import Learning from "../components/Learning"
import NewCars from "../components/NewCars"
import Questions from "../components/Questions"
import Requirements from "../components/Requirements"
import SEO from "../components/SEO"
import Services from "../components/Services"
import TaxiPark from "../components/TaxiPark"
import WorkStart from "../components/WorkStart"

export default () => (
  <Layout>
    <SEO title="Главная" />
    <NewCars />
    <Connection />
    <Conditions />
    <Requirements />
    <WorkStart />
    <Services />
    <TaxiPark />
    <Learning />
    <Questions />
    <Contacts />
  </Layout>
)