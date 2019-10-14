import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps"
import styled from "styled-components"

// @ts-ignore
import { colors } from "../../tailwind"

const Title = styled.h1`
  ${tw`font-semibold text-lg`}
`

const Container = styled.div`
  ${tw`relative overflow-hidden my-4`}

  height: 70vh;
`

const Contacts = styled.section`
  ${tw`absolute z-10 p-2`}

  top: ${props => props.theme.spacing["2"]};
  left: ${props => props.theme.spacing["2"]};

  @media (max-width: ${props => props.theme.screens.sm}) {
    right: ${props => props.theme.spacing["2"]};
  }

  &::before {
    ${tw`absolute z--10 opacity-75`}

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    content: "";

    background: ${props => props.theme.colors["yellow-dark"]};
  }
`

export default () => {
  const {
    site: {
      siteMetadata: { taxiData: data },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            address
            brand
            inn
            number
            url
            workTime
            coordinates
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Contacts>
        <Title>Контакты</Title>
        <p>{data.number}</p>
        <p>{data.workTime}</p>
        <p>{data.address}</p>
      </Contacts>
      <YMaps>
        <Map
          defaultState={{
            center: data.coordinates,
            zoom: 15,
            behaviors: ["drag"],
          }}
          width={"100%"}
          height={"100%"}
        >
          <ZoomControl
            options={{
              size: "small",
              position: { left: 10, top: 180 },
            }}
          />
          <Placemark
            geometry={data.coordinates}
            properties={{ iconCaption: data.brand }}
            options={{
              preset: "islands#blueAutoIcon",
              iconColor: colors["yellow-dark"],
            }}
          />
        </Map>
      </YMaps>
    </Container>
  )
}
