import React from "react"

import Conditions from "../components/Conditions"
import Connection from "../components/Connection"
import Contacts from "../components/Contacts"
import Download from "../components/Download"
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
    <Seo />
    <NewCars />
    <Conditions />
    <Requirements />
    <WorkStart />
    <Services />
    <TaxiPark />
    <Learning />
    <Download />
    <Connection />
    <Contacts />
  </Layout>
)

export default Index
