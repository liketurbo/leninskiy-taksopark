import React from "react"

import Conditions from "../components/Conditions"
import Connection from "../components/Connection"
import Contacts from "../components/Contacts"
import Layout from "../components/Layout"
import Learning from "../components/Learning"
import NewCars from "../components/NewCars"
import Requirements from "../components/Requirements"
import Seo from "../components/Seo"
import Services from "../components/Services"
import TaxiPark from "../components/TaxiPark"
import WorkStart from "../components/WorkStart"

const Index = () => (
  <Layout>
    <Seo title="Главная" />
    <NewCars />
    <Conditions />
    <Requirements />
    <WorkStart />
    <Services />
    <TaxiPark />
    <Learning />
    <Connection />
    <Contacts />
  </Layout>
)

export default Index
