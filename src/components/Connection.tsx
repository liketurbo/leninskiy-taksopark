import { useMutation } from "@apollo/react-hooks"
import { Formik } from "formik"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import gql from "graphql-tag"
import React from "react"
import styled from "styled-components"
import { object as yupObject, string as yupString } from "yup"

import Button from "@-taxi-parks-ui/button"
import PContainer from "@-taxi-parks-ui/container"
import InputArea from "@-taxi-parks-ui/input-area"
import InputDefault from "@-taxi-parks-ui/input-default"
import InputPhone from "@-taxi-parks-ui/input-phone"

import useToast from "../hooks/useToast"
import PH1 from "./H/H1"
import PH2 from "./H/H2"

const Container = styled(PContainer)`
  ${tw`flex flex-col items-center`}
`

const H1 = styled(PH1)`
  ${tw`text-center text-white`}
`

const H2 = styled(PH2)`
  ${tw`text-center text-white`}
`

const Link = styled.a`
  ${tw`font-medium underline hover:no-underline`}
`

const Form = styled.form`
  ${tw`flex flex-col items-center p-5 w-full sm:w-2/3`}
`

const P = styled.p`
  ${tw`text-grey-lightest text-sm font-light text-center mt-4`}
`

const mutationRequestAdd = gql`
  mutation($input: InputRequest!) {
    requestAdd(input: $input)
  }
`

const Connection = () => {
  const [funcRequestAdd] = useMutation(mutationRequestAdd)

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
      id="connection"
      Tag="section"
    >
      <Container>
        <H1>{"Подключитесь к Яндекс.Такси"}</H1>
        <H2>{"Начните зарабатывать💰 прямо сейчас"}</H2>
        <Formik
          initialValues={{
            name: "",
            note: "",
            phone: "",
          }}
          onSubmit={async input => {
            try {
              await funcRequestAdd({
                variables: {
                  input,
                },
              })

              toast.show("Заявка успешно отправлена", "success")
            } catch {
              toast.show("Не удалось отправить заявку", "danger")
            }
          }}
          validationSchema={yupObject().shape({
            name: yupString()
              .trim()
              .matches(/^[А-Яа-яA-Za-z\- ]{2,}$/u, "Введите настоящее имя.")
              .required("Обязательное поле."),
            note: yupString()
              .trim()
              .notRequired(),
            phone: yupString()
              .trim()
              .matches(
                /^8 \(\d{3}\) \d{3}-\d{2}-\d{2}$/u,
                "Неправильный формат номера."
              )
              .required("Обязательное поле."),
          })}
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
                required
                value={values.name}
              />
              <InputPhone
                disabled={isSubmitting}
                error={errors.phone}
                name="phone"
                onChange={handleChange}
                placeholder="Ваш номер"
                required
                value={values.phone}
              />
              <InputArea
                disabled={isSubmitting}
                error={errors.note}
                name="note"
                onChange={handleChange}
                placeholder="Ваши примечания"
                value={values.note}
              />
              <Button disabled={isSubmitting || !isValid} type="submit">
                {"Отправить заявку"}
              </Button>
              <P>
                {"Отправляя заявку, вы соглашаетесь с "}
                <Link href="/policy" target="_blank">
                  {"правилами обработки персональных данных"}
                </Link>
                {"."}
              </P>
            </Form>
          )}
        </Formik>
      </Container>
    </BackgroundImage>
  )
}

export default Connection
