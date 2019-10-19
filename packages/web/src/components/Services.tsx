import { graphql, useStaticQuery } from "gatsby"
import PImg from "gatsby-image"
import React from "react"
import styled from "styled-components"

import PButton from "./Button"
import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"

const H1 = styled(PH1)`
  grid-area: h1;
`

const H2 = styled(PH2)`
  ${tw`mb-8 font-normal`}

  grid-area: h2;
`

const Background = styled(PContent)`
  ${tw`m-0 py-8 bg-grey-lighter flex flex-wrap items-center justify-around`}
`

const Strong = styled(PH2)`
  ${tw`m-0 w-56`}
`

const Content = styled(PContent)`
  ${tw`mb-0`}

  display: grid;
  grid-template-areas:
    "h1 h1 h1"
    "h2 h2 h2"
    "pic1 pic2 pic3";
  justify-items: center;
  align-items: center;

  @media (max-width: ${props => props.theme.screens.lg}) {
    grid-template-areas:
      "h1 h1 h1"
      "h2 h2 h2"
      "pic1 pic1 pic1"
      "pic2 pic2 pic2"
      "pic3 pic3 pic3";
  }
`

const Img = styled(PImg)<{ pic1?: boolean; pic2?: boolean; pic3?: boolean }>`
  ${tw`mb-8`}

  grid-area: ${props => props.pic1 && "pic1"};
  grid-area: ${props => props.pic2 && "pic2"};
  grid-area: ${props => props.pic3 && "pic3"};
`

const Button = styled(PButton)`
  grid-area: btn;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      uber: imageSharp(fluid: { originalName: { eq: "uber.png" } }) {
        fixed(quality: 90, width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
      gett: imageSharp(fluid: { originalName: { eq: "gett.png" } }) {
        fixed(quality: 90, width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
      yandex: imageSharp(fluid: { originalName: { eq: "yandex.png" } }) {
        fixed(quality: 90, width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <>
      <Content>
        <H1>Работать и зарабатывать с нами - просто!</H1>
        <H2>Официальные партнеры:</H2>
        <Img pic1 fixed={data.uber.fixed} />
        <Img pic2 fixed={data.gett.fixed} />
        <Img pic3 fixed={data.yandex.fixed} />
      </Content>
      <Background>
        <Strong>Подключитесь сегодня: просто оставьте заявку</Strong>
        <Button>Подключиться</Button>
      </Background>
    </>
  )
}
