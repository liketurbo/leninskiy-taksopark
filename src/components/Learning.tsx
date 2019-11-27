import React from "react"
import Youtube from "react-youtube"
import styled from "styled-components"

import PContainer from "@-taxi-parks-ui/container"
import screens from "@-taxi-parks-ui/theme-screens"

import PH1 from "./H/H1"

const Container = styled(PContainer)`
  ${tw`bg-grey-lighter pb-6`}
`

const H1 = styled(PH1)`
  ${tw`text-center`}
`

const Video = styled(Youtube)`
  width: 100%;
  height: 90vh;

  @media (max-width: ${screens.lg}) {
    height: 80vh;
  }

  @media (max-width: ${screens.md}) {
    height: 70vh;
  }

  @media (max-width: ${screens.sm}) {
    height: 60vh;
  }
`

const Learning = () => (
  <Container>
    <H1>{"Обучение по работе с Таксометром"}</H1>
    <Video videoId="Qz0xUI-PXV0" />
  </Container>
)

export default Learning
