import { graphql, useStaticQuery } from "gatsby"
import PImg from "gatsby-image"
import React from "react"
import styled from "styled-components"

import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"

const Content = styled(PContent)`
  ${tw`flex flex-col items-center bg-grey-lighter py-6`}
`

const H1 = styled(PH1)`
  ${tw`text-center`}
`

const H2 = styled(PH2)`
  ${tw`font-normal text-center`}
`

const Img = styled(PImg)`
  ${tw`inline-block w-56`}
`

const Link = styled.a`
  ${tw`mx-auto`}
`

const Download = () => {
  const data = useStaticQuery(graphql`
    query {
      android: imageSharp(fluid: { originalName: { eq: "android.png" } }) {
        fluid(quality: 90, maxWidth: 646) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return (
    <Content>
      <H1>{"Скачать Таксометр на Android устройство"}</H1>
      <H2>{"Внимание⚠️: требуется версия Android 5.0 и выше"}</H2>
      <Link
        href="https://play.google.com/store/apps/details?id=ru.yandex.taximeter"
        target="_blank"
        title="Скачайте Таксометр и начните работать водителем"
      >
        <Img {...data.android} />
      </Link>
    </Content>
  )
}

export default Download
