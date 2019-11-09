import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import gql from "graphql-tag"
import React, { useState } from "react"
import useForm from "react-hook-form"
import InputMask from "react-input-mask"
import styled from "styled-components"

import { useMutation } from "@apollo/react-hooks"
import Button from "@taxi-parks/ui/packages/Button"

import extractNumbers from "../utils/extractNumbers"
import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"
import Input from "./Input"

const Content = styled(PContent)`
  ${tw`flex flex-col items-center`}
`

const H1 = styled(PH1)`
  ${tw`text-center text-white`}
`

const H2 = styled(PH2)`
  ${tw`text-center text-white`}
`

const Form = styled.form`
  ${tw`flex flex-col items-center p-5 w-full sm:w-2/3`}
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

const addQuestionMutation = gql`
  mutation($input: QuestionInput!) {
    addQuestion(input: $input)
  }
`

export default () => {
  const [addQuestionFunc] = useMutation(addQuestionMutation)

  const { register, handleSubmit, reset } = useForm()
  const [phoneNumberValue, setPhoneNumberValue] = useState("")

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
    <BackgroundImage
      fluid={[
        "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))",
        data,
      ]}
      Tag="section"
    >
      <Content>
        <H1>У вас есть вопросы?</H1>
        <H2>Получите консультацию по телефону. Это бесплатно 😄.</H2>
        <Form
          onSubmit={handleSubmit(async ({ name, phone, question }) => {
            try {
              phone = `${extractNumbers(phone)}`

              if (phone) {
                phone = `+7${phone.slice(1)}`
              }

              await addQuestionFunc({
                variables: { input: { name, phone, question } },
              })

              reset()
              setPhoneNumberValue("")
            } catch (err) {
              console.log(err.message)
            }
          })}
        >
          <TextInput name="name" ref={register} placeholder="Ваше имя" />
          <PhoneInput
            name="phone"
            mask="8 (999) 999-99-99"
            placeholder="Ваш номер"
            value={phoneNumberValue}
            onChange={e => setPhoneNumberValue(e.target.value)}
            inputRef={register}
          />
          <TextArea name="question" ref={register} placeholder="Ваш вопрос" />
          <Button type="submit">Получить консультацию</Button>
        </Form>
      </Content>
    </BackgroundImage>
  )
}
