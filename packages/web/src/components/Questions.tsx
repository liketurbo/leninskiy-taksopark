import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import useForm from "react-hook-form"
import InputMask from "react-input-mask"
import styled, { css } from "styled-components"

import Button from "./Button"
import PH1 from "./H/H1"
import PH2 from "./H/H2"

const Background = styled(BackgroundImage)`
  ${tw`py-20 my-12`}
`

const H1 = styled(PH1)`
  ${tw`text-center text-white`}
`

const H2 = styled(PH2)`
  ${tw`text-center text-white`}
`

const Form = styled.form`
  ${tw`flex flex-col items-center px-4`}

  padding: 0 calc(50% - ${props => props.theme.spacing["64"]});
  border: ${props => props.theme.spacing["8"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;
`

const Input = css`
  ${tw`p-2 mb-4 w-full`}
`

const TextInput = styled.input`
  ${Input}
`

const PhoneInput = styled(InputMask)`
  ${Input}
`

const TextArea = styled.textarea`
  ${Input}

  height: 6em;
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
          ...GatsbyImageSharpFluid_withWebp
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
      <H1>У вас есть вопросы?</H1>
      <H2>Получите консультацию по телефону. Это бесплатно 😄.</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="name" ref={register} placeholder="Ваше имя" />
        <PhoneInput
          mask="8 (999) 999-99-99"
          name="phone"
          placeholder="Ваш номер"
          ref={register}
        />
        <TextArea name="question" ref={register} placeholder="Ваш вопрос" />
        <Button type="submit">Получить консультацию</Button>
      </Form>
    </Background>
  )
}
