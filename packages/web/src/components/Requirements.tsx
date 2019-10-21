import { graphql, useStaticQuery } from "gatsby"
import PImg from "gatsby-image"
import React from "react"
import styled from "styled-components"

import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"
import PH3 from "./H/H3"

const Content = styled(PContent)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: space-around;

  @media (max-width: ${props => props.theme.screens["md"]}) {
    grid-template-columns: 1fr;
  }
`

const H1 = styled(PH1)`
  grid-column: 1 / -1;
  justify-self: center;
`

const H2 = styled(PH2)`
  ${tw`font-normal mb-8`}

  grid-column: 1 / -1;
  justify-self: center;
`

const H3 = styled(PH3)`
  ${tw`mt-3 whitespace-no-wrap mb-6 md:mb-0`}
`

const Img = styled(PImg)`
  ${tw`rounded-full`}
`

const Article = styled.article`
  ${tw`flex flex-col justify-center items-center`}

  :last-child {
    > ${H3} {
      ${tw`mb-0`}
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      doc: imageSharp(fluid: { originalName: { eq: "doc.png" } }) {
        fixed(quality: 90, width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
      russian: imageSharp(fluid: { originalName: { eq: "russian.jpg" } }) {
        fixed(quality: 90, width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
      wheel: imageSharp(fluid: { originalName: { eq: "wheel.png" } }) {
        fixed(quality: 90, width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <Content>
      <H1>Требования к водителям</H1>
      <H2>Если вы проходите по этим 3 пунктам - звоните!</H2>
      <Article>
        <Img {...data.doc} />
        <H3>Возраст более 23 лет</H3>
      </Article>
      <Article>
        <Img {...data.russian} />
        <H3>Гражданство РФ</H3>
      </Article>
      <Article>
        <Img {...data.wheel} />
        <H3>Стаж вождения более 3х лет</H3>
      </Article>
    </Content>
  )
}
