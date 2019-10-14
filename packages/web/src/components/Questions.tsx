import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import useForm from "react-hook-form"
import styled from "styled-components"

const Background = styled(BackgroundImage)`
  ${tw`py-8`}
`

const Title = styled.h1`
  ${tw`text-white text-center mb-4 text-2xl font-semibold`}
`

const Subtitle = styled.h2`
  ${tw`text-white text-center mb-4 text-xl font-medium`}
`

const Form = styled.form`
  ${tw`flex flex-col items-center px-4`}

  padding: 0 calc(50% - ${props => props.theme.spacing["64"]});
  border: ${props => props.theme.spacing["8"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;
`

const Input = styled.input`
  ${tw`p-2 mb-4 w-full`}
`

const Button = styled.button`
  ${tw`bg-yellow hover:bg-yellow-dark text-black py-1 px-3 w-full`}

  transition: background-color 0.15s ease;
`

const onSubmit = (data: {
  name?: string
  phone?: number
  question?: string
}) => {
  //eslint-disable-next-line no-console
  console.log(data)
}

export default () => {
  const { register, handleSubmit } = useForm()
  const {
    background: { fluid: data },
  } = useStaticQuery(graphql`
    query {
      background: imageSharp(
        fluid: { originalName: { eq: "background-1.jpg" } }
      ) {
        fluid(quality: 90, maxWidth: 1024) {
          aspectRatio
          sizes
          src
          srcSet
          srcWebp
          srcSetWebp
          base64
        }
      }
    }
  `)

  return (
    <Background
      fluid={[
        "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))",
        data,
      ]}
      Tag="section"
    >
      <Title>У вас есть вопросы?</Title>
      <Subtitle>Получите консультацию по телефону. Это бесплатно 😄.</Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input name="name" ref={register} placeholder="Ваше имя" />
        <Input name="phone" ref={register} placeholder="Ваш телефон" />
        <Input name="question" ref={register} placeholder="Ваш вопрос" />
        <Button type="submit">Получить консультацию</Button>
      </Form>
    </Background>
  )
}
