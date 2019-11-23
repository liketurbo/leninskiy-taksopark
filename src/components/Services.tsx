import { graphql, useStaticQuery } from "gatsby"
import PImg from "gatsby-image"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import PButton from "@-taxi-parks-ui/button"

import convertRemToPixels from "../utils/convertRemToPixels"
import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"

const H1 = styled(PH1)`
  ${tw`text-center`}

  grid-column: 1 / -1;
`

const H2 = styled(PH2)`
  ${tw`font-normal text-center`}

  grid-column: 1 / -1;
`

const Background = styled(PContent)`
  ${tw`py-6 bg-grey-lighter flex flex-wrap items-center justify-around`}
`

const Strong = styled(PH2)`
  ${tw`m-0 w-56`}

  @media (max-width: ${props => props.theme.screens.sm}) {
    ${tw`mb-4 text-center`}

    flex-basis: 100%;
  }
`

const Content = styled(PContent)`
  ${tw`pb-6`}

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: space-around;
  align-items: center;

  @media (max-width: ${props => props.theme.screens["md"]}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const Img = styled(PImg)`
  ${tw`mb-6 md:mb-0`}

  &:last-child {
    ${tw`mb-0`}
  }

  justify-self: center;
`

const Button = styled(PButton)`
  grid-area: btn;
`

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      uber: imageSharp(fluid: { originalName: { eq: "uber.png" } }) {
        fixed(quality: 90, width: 240) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      gett: imageSharp(fluid: { originalName: { eq: "gett.png" } }) {
        fixed(quality: 90, width: 240) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      yandex: imageSharp(fluid: { originalName: { eq: "yandex.png" } }) {
        fixed(quality: 90, width: 240) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  `)

  return (
    <>
      <Content>
        <H1>{"Работать и зарабатывать с нами - просто!"}</H1>
        <H2>{"Официальные партнеры:"}</H2>
        <Img {...data.uber} alt="Uber" />
        <Img {...data.gett} alt="Gett" />
        <Img {...data.yandex} alt="Яндекс" />
      </Content>
      <Background>
        <Strong>{"Подключитесь сегодня: просто оставьте заявку"}</Strong>
        <AnchorLink href="#connection" offset={convertRemToPixels(3.5)}>
          <Button>{"Подключиться"}</Button>
        </AnchorLink>
      </Background>
    </>
  )
}

export default Services
