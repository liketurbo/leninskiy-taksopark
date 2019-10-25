import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled from "styled-components"

import { Query } from "../../types/graphqlTypes"
import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"
import Paragraph from "./Paragraph"

const Content = styled(PContent)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: ${props => props.theme.spacing["6"]};

  @media (max-width: ${props => props.theme.screens.md}) {
    grid-template-columns: 1fr;
  }
`

const H2 = styled(PH2)`
  transition: color 0.15s ease;
`

const Tile = styled(BackgroundImage)`
  ${tw`overflow-hidden max-w-sm p-10 flex-col rounded`}

  ::before {
    transition: opacity 0.15s ease !important;
  }

  :hover {
    > ${H2} {
      ${tw`text-red`}
    }

    ::before {
      opacity: 0.5 !important;
    }
  }

  @media (max-width: ${props => props.theme.screens.sm}) {
    ${tw`px-5`}
  }
`

const H1 = styled(PH1)`
  ${tw`mb-0 text-center`}

  grid-column: 1 / -1;
`

export default () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            brand
            car
            city
          }
        }
      }
      topLight: imageSharp(fluid: { originalName: { eq: "top-light.jpg" } }) {
        fluid(quality: 90, maxWidth: 1080) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      taxi: imageSharp(fluid: { originalName: { eq: "taxi.jpg" } }) {
        fluid(quality: 90, maxWidth: 1080) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  const { brand, car, city } = data.site!.siteMetadata!.taxiData!

  return (
    <Content>
      <H1>
        Таксопарк {brand} - партнер Яндекс в {city}!
      </H1>
      <Tile
        fluid={[
          "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))",
          (data as any).topLight.fluid,
        ]}
        Tag="button"
      >
        <H2>Подключение к сервисам такси в {city}</H2>
        <Paragraph>
          Минимальная комиссия парка! Ежедневные быстрые выплаты! Выход на линию
          уже через 15 минут.
        </Paragraph>
      </Tile>
      <Tile
        fluid={[
          "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))",
          (data as any).taxi.fluid,
        ]}
        Tag="button"
      >
        <H2>Работа на автомобилях таксопарка</H2>
        <Paragraph>
          Мы предоставляем Вам новый автомобиль {car}, с нулевым пробегом.
          Автомобиль на ГАЗу, бензине, брендированный и с лицензией.
        </Paragraph>
      </Tile>
    </Content>
  )
}
