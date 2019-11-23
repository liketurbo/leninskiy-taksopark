import { graphql, useStaticQuery } from "gatsby"
import PImg from "gatsby-image"
import React from "react"
import styled from "styled-components"

import Container from "@-taxi-parks-ui/container"

import PH1 from "./H/H1"
import PH2 from "./H/H2"

const Background = styled(Container)`
  ${tw`bg-grey-lighter`}

  display: grid;
  grid-template-rows: auto repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.spacing["4"]};
  justify-items: center;

  @media (max-width: ${props => props.theme.screens.md}) {
    grid-template-rows: auto repeat(6, 1fr);
    grid-template-columns: 1fr;
  }
`

const H1 = styled(PH1)`
  ${tw`text-center`}

  grid-column: 1 / -1;
`

const Card = styled.figure`
  ${tw`w-full sm:w-2/3`}

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto 1fr;
  grid-gap: ${props => props.theme.spacing["4"]};

  @media (max-width: ${props => props.theme.screens.sm}) {
    justify-items: center;
  }
`

const H2 = styled(PH2)`
  ${tw`m-0`}
`

const Img = styled(PImg)`
  ${tw`rounded-full`}

  grid-row: 1 / -1;
`

const Conditions = () => {
  const { calc, map, umb, cal, atm, perc } = useStaticQuery(graphql`
    query {
      calc: imageSharp(fluid: { originalName: { eq: "calc.png" } }) {
        fixed(quality: 90, width: 58) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      map: imageSharp(fluid: { originalName: { eq: "map.png" } }) {
        fixed(quality: 90, width: 58) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      umb: imageSharp(fluid: { originalName: { eq: "umb.png" } }) {
        fixed(quality: 90, width: 58) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      cal: imageSharp(fluid: { originalName: { eq: "cal.png" } }) {
        fixed(quality: 90, width: 58) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      atm: imageSharp(fluid: { originalName: { eq: "atm.png" } }) {
        fixed(quality: 90, width: 58) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      perc: imageSharp(fluid: { originalName: { eq: "perc.png" } }) {
        fixed(quality: 90, width: 58) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  `)

  return (
    <Background as="section" id="conditions">
      <H1>{"Комфортные условия работы"}</H1>
      <Card>
        <Img {...calc} />
        <H2 as="figcaption">{"Выгодные условия"}</H2>
        <p>{"Выплаты ежедневные!"}</p>
      </Card>
      <Card>
        <Img {...map} />
        <H2 as="figcaption">{"Обеспечиваем заказами 24 часа"}</H2>
        <p>{"Наши автомобили имеют высокий приоритет"}</p>
      </Card>
      <Card>
        <Img {...umb} />
        <H2 as="figcaption">{"Отсутствие рисков и предоплат"}</H2>
        <p>{"Автомобили застрахованы ОСАГО/КАСКО"}</p>
      </Card>
      <Card>
        <Img {...cal} />
        <H2 as="figcaption">{"Удобный график работы"}</H2>
        <p>{"Работайте в удобное время посменно 2д/2н/2в"}</p>
      </Card>
      <Card>
        <Img {...atm} />
        <H2 as="figcaption">{"Старт работы за 15 минут"}</H2>
        <p>{"Приезжаете, подключаетесь и выходите на линию!"}</p>
      </Card>
      <Card>
        <Img {...perc} />
        <H2 as="figcaption">{"Возможность работы на своём авто"}</H2>
        <p>{"Если вы хотите работать на своем авто - звоните!"}</p>
      </Card>
    </Background>
  )
}

export default Conditions
