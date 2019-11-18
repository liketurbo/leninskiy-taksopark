import { Formik } from "formik"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import gql from "graphql-tag"
import React from "react"
import styled from "styled-components"
import { object as yupObject, string as yupString } from "yup"

import Button from "@-taxi-parks-ui/button"
import InputDefault from "@-taxi-parks-ui/input-default"
import InputPhone from "@-taxi-parks-ui/input-phone"
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
  mutation($input: InputQuestion!) {
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
          initialValues={{ name: "", phone: "", content: "" }}
          validationSchema={yupObject().shape({
            name: yupString()
              .trim()
              .matches(/^[А-Яа-яA-Za-z\- ]{2,}$/, "Введите настоящее имя.")
              .required("Обязательное поле."),
            phone: yupString()
              .trim()
              .matches(
                /^8\ \(\d{3}\)\ \d{3}\-\d{2}\-\d{2}$/,
                "Неправильный формат номера."
              )
              .required("Обязательное поле."),
            content: yupString()
              .trim()
              .required("Обязательное поле."),
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
          {({
            errors,
            isValid,
            isSubmitting,
            handleChange,
            handleSubmit,
            values,
          }) => (
            <Form onSubmit={handleSubmit}>
              <InputDefault
                disabled={isSubmitting}
                error={errors.name}
                name="name"
                onChange={handleChange}
                placeholder="Ваше имя"
                value={values.name}
              />
              <InputPhone
                disabled={isSubmitting}
                error={errors.phone}
                name="phone"
                onChange={handleChange}
                placeholder="Ваш номер"
                value={values.phone}
              />
              <InputDefault
                disabled={isSubmitting}
                error={errors.content}
                name="content"
                onChange={handleChange}
                placeholder="Ваш вопрос"
                type="area"
                value={values.content}
              />
              <Button disabled={isSubmitting || !isValid} type="submit">
                Получить консультацию
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </BackgroundImage>
  )
}
