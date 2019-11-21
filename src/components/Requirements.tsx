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
  ${tw`text-center`}

  grid-column: 1 / -1;
`

const H2 = styled(PH2)`
  ${tw`font-normal text-center mb-8`}

  grid-column: 1 / -1;
  justify-self: center;
`

const H3 = styled(PH3)`
  ${tw`mt-3 whitespace-no-wrap mb-6 md:mb-0`}
`

const Img = styled(PImg)`
  ${tw`rounded-full`}
`

const Card = styled.figure`
  ${tw`flex flex-col justify-center items-center`} :last-child {
    > ${H3} {
      ${tw`mb-0`}
    }
  }
`

const Requirements = () => {
  const data = useStaticQuery(graphql`
    query {
      doc: imageSharp(fluid: { originalName: { eq: "doc.png" } }) {
        fixed(quality: 90, width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      russian: imageSharp(fluid: { originalName: { eq: "russian.jpg" } }) {
        fixed(quality: 90, width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      wheel: imageSharp(fluid: { originalName: { eq: "wheel.png" } }) {
        fixed(quality: 90, width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  `)

  return (
    <Content id="requirements">
      <H1>{"Требования к водителям"}</H1>
      <H2>{"Если вы проходите по этим 3 пунктам - звоните!"}</H2>
      <Card>
        <Img {...data.doc} />
        <H3 as="figcaption">{"Возраст более 23 лет"}</H3>
      </Card>
      <Card>
        <Img {...data.russian} />
        <H3 as="figcaption">{"Гражданство РФ"}</H3>
      </Card>
      <Card>
        <Img {...data.wheel} />
        <H3 as="figcaption">{"Стаж вождения более 3х лет"}</H3>
      </Card>
    </Content>
  )
}

export default Requirements
