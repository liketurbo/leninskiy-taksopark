import React from "react"
import Youtube from "react-youtube"
import styled from "styled-components"

const Container = styled.section`
  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
`

const Title = styled.h1`
  ${tw`text-black text-center mb-4 text-2xl font-bold`}
`

const Video = styled(Youtube)`
  width: 100%;
  height: 90vh;

  @media (max-width: ${props => props.theme.screens.lg}) {
    height: 70vh;
  }

  @media (max-width: ${props => props.theme.screens.md}) {
    height: 60vh;
  }

  @media (max-width: ${props => props.theme.screens.sm}) {
    height: 50vh;
  }
`

export default () => (
  <Container>
    <Title>Обучение по работе с таксометром</Title>
    <Video videoId="Qz0xUI-PXV0" />
  </Container>
)
