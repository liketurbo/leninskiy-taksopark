import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps"
import styled from "styled-components"

import colors from "@-taxi-parks-ui/theme-colors"
import screens from "@-taxi-parks-ui/theme-screens"
import spacing from "@-taxi-parks-ui/theme-spacing"

import useScreenSize from "../hooks/useScreenSize"
import H1 from "./H/H1"
import Phone from "./Phone"

const Container = styled.div`
  ${tw`relative overflow-hidden`}

  height: 90vh;

  @media (max-width: ${screens.lg}) {
    height: 80vh;
  }

  @media (max-width: ${screens.md}) {
    height: 70vh;
  }

  @media (max-width: ${screens.sm}) {
    height: 60vh;
  }
`

const SContacts = styled.section`
  ${tw`absolute z-10 p-2`}

  top: ${spacing["2"]};
  left: ${spacing["2"]};

  @media (max-width: ${screens.sm}) {
    right: ${spacing["2"]};
  }

  &::before {
    ${tw`absolute z--10 opacity-75 rounded`}

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    content: "";

    background: ${colors["yellow-dark"]};
  }
`

const Contacts = () => {
  const smallScreen = useScreenSize("sm")
  const mediumScreen = useScreenSize("md")

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            address
            brand
            coordinates
            workTime
          }
        }
      }
    }
  `)

  const {
    address,
    brand,
    coordinates,
    workTime,
  } = data.site.siteMetadata.taxiData

  return (
    <Container id="contacts">
      <SContacts>
        <H1>{"Контакты"}</H1>
        <p>{`Таксопарк "${brand}"`}</p>
        <p>{address}</p>
        <p>{workTime}</p>
        <Phone />
      </SContacts>
      <YMaps>
        <Map
          defaultState={{
            behaviors: ["drag"],
            center: [
              coordinates[0] +
                (mediumScreen ? 0 : 0.001) +
                (smallScreen ? 0 : 0.002),
              coordinates[1],
            ],
            zoom: 15,
          }}
          height={"100%"}
          width={"100%"}
        >
          <ZoomControl
            options={{
              position: {
                left: 10,
                top: 200,
              },
              size: "small",
            }}
          />
          <Placemark
            geometry={coordinates}
            options={{
              iconColor: colors["yellow-dark"],
              preset: "islands#blueAutoIcon",
            }}
            properties={{ iconCaption: brand }}
          />
        </Map>
      </YMaps>
    </Container>
  )
}

export default Contacts
