import { graphql, useStaticQuery } from "gatsby"
import PImg from "gatsby-image"
import React from "react"
import styled from "styled-components"

import PH1 from "./H/H1"
import PH2 from "./H/H2"
import PH3 from "./H/H3"

const Container = styled.section`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "h1 photo"
    "h2 photo"
    "h3 photo"
    "list photo";
  grid-column-gap: ${props => props.theme.spacing["4"]};

  @media (max-width: ${props => props.theme.screens.md}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "h1"
      "h2"
      "h3"
      "list"
      "photo";
  }

  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;
`

const H1 = styled(PH1)`
  grid-area: h1;
`

const H2 = styled(PH2)`
  grid-area: h2;
`

const H3 = styled(PH3)`
  grid-area: h3;
`

const List = styled.ul`
  ${tw`pl-5 mb-4 md:mb-0`}

  grid-area: list;

  & > li {
    list-style-type: disc;
  }
`

const Img = styled(PImg)`
  grid-area: photo;
`

export default () => {
  const {
    background: { fluid: data },
  } = useStaticQuery(graphql`
    query {
      background: imageSharp(fluid: { originalName: { eq: "cars.png" } }) {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return (
    <Container>
      <H1>Обновляем таксопарк</H1>
      <H2>
        Мы непрерывно развиваемся и обновляем автопарк. Также все наши
        автомобили проходят все необходимые ТО и осмотр перед каждой сменой.
      </H2>
      <H3>Наши преимущества:</H3>
      <List>
        <li>Надежные и комфортные автомобили</li>
        <li>Все автомобили полностью брендированы Яндекс.Такси</li>
        <li>Высокий приоритет и большое количество заказов</li>
        <li>Заправка по картам (установлено ГБО)</li>
        <li>Оперативное ТО, нет простоев</li>
        <li>Автомобили застрахованы</li>
      </List>
      <Img fluid={data} />
    </Container>
  )
}
