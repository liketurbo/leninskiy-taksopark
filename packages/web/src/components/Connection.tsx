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
  grid-gap: ${props => props.theme.spacing["4"]};

  @media (max-width: ${props => props.theme.screens.md}) {
    grid-template-columns: 1fr;
  }
`

const H2 = styled(PH2)`
  transition: color 0.15s ease;
`

const Tile = styled(BackgroundImage)`
  ${tw`overflow-hidden max-w-sm p-10 flex-col`}

  ::before {
    transition: filter 0.15s ease !important;

    filter: blur(2px);
    transform: translateZ(0) scale(1.1);
  }

  :hover {
    > ${H2} {
      ${tw`text-red`}
    }

    ::before {
      filter: blur(15px);
      transform: translateZ(0) scale(1.3);
    }
  }

  @media (max-width: ${props => props.theme.screens.sm}) {
    ${tw`p-5`}
  }
`

const H1 = styled(PH1)`
  ${tw`mb-0 `}

  grid-column: 1 / -1;
`

export default () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            address
            brand
            car
            city
            inn
            email
            number
            url
            workTime
            owner
          }
        }
      }
      connectOnline: imageSharp(
        fluid: { originalName: { eq: "connect-online.jpg" } }
      ) {
        fluid(quality: 90, maxWidth: 1080) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      connectOffline: imageSharp(
        fluid: { originalName: { eq: "connect-offline.jpg" } }
      ) {
        fluid(quality: 90, maxWidth: 1080) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return (
    <Content>
      <H1>
        Таксопарк Фаворит-Авто - партнер Яндекс в{" "}
        {data.site!.siteMetadata!.taxiData!.city}!
      </H1>
      <Tile
        fluid={[
          "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))",
          (data as any).connectOnline.fluid,
        ]}
        Tag="button"
      >
        <H2>
          Подключение к сервисам такси в{" "}
          {data.site!.siteMetadata!.taxiData!.city}
        </H2>
        <Paragraph>
          Минимальная комиссия парка! Ежедневные быстрые выплаты! Выход на линию
          уже через 15 минут.
        </Paragraph>
      </Tile>
      <Tile
        fluid={[
          "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))",
          (data as any).connectOffline.fluid,
        ]}
        Tag="button"
      >
        <H2>Работа на автомобилях таксопарка</H2>
        <Paragraph>
          Мы предоставляем Вам новый автомобиль{" "}
          {data.site!.siteMetadata!.taxiData!.car}, с нулевым пробегом.
          Автомобиль на ГАЗу, бензине, брендированный и с лицензией.
        </Paragraph>
      </Tile>
    </Content>
  )
}
