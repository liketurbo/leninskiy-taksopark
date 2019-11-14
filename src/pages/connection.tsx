import { Formik } from "formik"
import { graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import React from "react"
import styled from "styled-components"
import { object as yupObject, string as yupString } from "yup"

import Button from "@-taxi-parks-ui/button"
import InputDefault from "@-taxi-parks-ui/input-default"
import InputPhone from "@-taxi-parks-ui/input-phone"
import { useMutation } from "@apollo/react-hooks"

import { Query } from "../../types/graphqlTypes"
import PContent from "../components/Content"
import H1 from "../components/H/H1"
import H2 from "../components/H/H2"
import SEO from "../components/SEO"
import useToast from "../hooks/useToast"

const Content = styled(PContent)`
  ${tw`flex flex-col items-center`}
`

const Form = styled.form`
  ${tw`flex flex-col items-center bg-yellow-dark rounded p-5 w-full sm:w-2/3`}
`

const Paragraph = styled.p`
  ${tw`text-sm font-light text-center mt-4`}
`

const addRequestMutation = gql`
  mutation($input: InputRequest!) {
    addRequest(input: $input)
  }
`

export default () => {
  const [addRequestFunc] = useMutation(addRequestMutation)

  const toast = useToast()

  const { site } = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            city
          }
        }
      }
    }
  `)

  const { city } = site!.siteMetadata!.taxiData!

  return (
    <>
      <SEO title="Подключение" />
      <Content>
        <H1>Заявка на подключение</H1>
        <Formik
          initialValues={{ name: "", phone: "" }}
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
          })}
          onSubmit={async ({ name, phone }) => {
            try {
              await addRequestFunc({ variables: { input: { name, phone } } })
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
              <H2>
                Подключитесь к официальному партнеру Яндекс Такси в городе{" "}
                {city}.
              </H2>
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
              <Button
                disabled={isSubmitting || !isValid}
                type="submit"
                variant="danger"
              >
                Отправить
              </Button>
              <Paragraph>
                Отправляя заявку, вы соглашаетесь с правилами обработки
                персональных данных
              </Paragraph>
            </Form>
          )}
        </Formik>
      </Content>
    </>
  )
}
