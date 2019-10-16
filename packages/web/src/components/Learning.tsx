import React from "react"
import Youtube from "react-youtube"
import styled from "styled-components"

import PH1 from "./H/H1"

const Container = styled.section`
  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
`

const H1 = styled(PH1)`
  ${tw`text-center`}
`

const Video = styled(Youtube)`
  width: 100%;
  height: 90vh;

  @media (max-width: ${props => props.theme.screens.lg}) {
    height: 80vh;
  }

  @media (max-width: ${props => props.theme.screens.md}) {
    height: 70vh;
  }

  @media (max-width: ${props => props.theme.screens.sm}) {
    height: 60vh;
  }
`

export default () => (
  <Container>
    <H1>Обучение по работе с таксометром</H1>
    <Video videoId="Qz0xUI-PXV0" />
  </Container>
)
