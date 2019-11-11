import { Formik } from "formik"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import gql from "graphql-tag"
import React from "react"
import styled from "styled-components"
import { object as yupObject, string as yupString } from "yup"

import Button from "@-taxi-parks-ui/button"
import TextInput from "@-taxi-parks-ui/input-default"
import PhoneInput from "@-taxi-parks-ui/input-phone"
import { useMutation } from "@apollo/react-hooks"

import useToast from "../hooks/useToast"
import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"

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

const addQuestionMutation = gql`
  mutation($input: QuestionInput!) {
    addQuestion(input: $input)
  }
`

export default () => {
  const [addQuestionFunc] = useMutation(addQuestionMutation)

  const toast = useToast()

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
        <Formik
          initialValues={{ name: "", phone: "", question: "" }}
          validationSchema={yupObject().shape({
            name: yupString()
              .trim()
              .matches(/^[А-Яа-яA-Za-z\- ]{2,}$/)
              .required(),
            phone: yupString()
              .trim()
              .matches(/^8\ \(\d{3}\)\ \d{3}\-\d{2}\-\d{2}$/)
              .required(),
            question: yupString()
              .trim()
              .required(),
          })}
          onSubmit={async ({ name, phone }) => {
            try {
              await addQuestionFunc({ variables: { input: { name, phone } } })
              toast.show("Заявка успешно отправлена", "success")
            } catch {
              toast.show("Не удалось отправить заявку", "danger")
            }
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <TextInput
                name="name"
                placeholder="Ваше имя"
                value={values.name}
                onChange={handleChange}
              />
              <PhoneInput
                name="phone"
                placeholder="Ваш номер"
                value={values.phone}
                onChange={handleChange}
              />
              <TextInput
                type="area"
                name="question"
                placeholder="Ваш вопрос"
                value={values.question}
                onChange={handleChange}
              />
              <Button type="submit">Получить консультацию</Button>
            </Form>
          )}
        </Formik>
      </Content>
    </BackgroundImage>
  )
}
