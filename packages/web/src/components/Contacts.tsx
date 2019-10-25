import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps"
import styled from "styled-components"

import { Query } from "../../types/graphqlTypes"
import theme from "../library/theme"
import H1 from "./H/H1"
import Phone from "./Phone"

const Container = styled.div`
  ${tw`relative overflow-hidden`}

  height: 90vh;

  @media (max-width: ${props => props.theme.screens.lg}) {
    height: 80vh;
  }

  @media (max-width: ${props => props.theme.screens.md}) {
    height: 70vh;
  }

  @media (max-width: ${props => props.theme.screens.sm}) {
    height: 60vh;
  }
`

const Contacts = styled.section`
  ${tw`absolute z-10 p-2`}

  top: ${props => props.theme.spacing["2"]};
  left: ${props => props.theme.spacing["2"]};

  @media (max-width: ${props => props.theme.screens.sm}) {
    right: ${props => props.theme.spacing["2"]};
  }

  &::before {
    ${tw`absolute z--10 opacity-75 rounded`}

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    content: "";

    background: ${props => props.theme.colors["yellow-dark"]};
  }
`

export default () => {
  const data = useStaticQuery<Query>(graphql`
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
  } = data.site!.siteMetadata!.taxiData!

  return (
    <Container>
      <Contacts>
        <H1>Контакты</H1>
        <p>Таксопарк "{brand}"</p>
        <p>{address}</p>
        <p>{workTime}</p>
        <Phone />
      </Contacts>
      <YMaps>
        <Map
          defaultState={{
            center: [coordinates![0]! + 0.001, coordinates![1]!],
            zoom: 15,
            behaviors: ["drag"],
          }}
          width={"100%"}
          height={"100%"}
        >
          <ZoomControl
            options={{
              size: "small",
              position: { left: 10, top: 200 },
            }}
          />
          <Placemark
            geometry={coordinates as any}
            properties={{ iconCaption: brand }}
            options={{
              preset: "islands#blueAutoIcon",
              iconColor: theme.colors["yellow-dark"],
            }}
          />
        </Map>
      </YMaps>
    </Container>
  )
}
