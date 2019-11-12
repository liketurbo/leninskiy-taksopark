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

import { Query } from "../../types/graphqlTypes"
import useToast from "../hooks/useToast"
import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"
import List from "./List"

const Content = styled(PContent)`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.spacing["6"]};

  @media (max-width: ${props => props.theme.screens.md}) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr;
  }
`

const H1 = styled(PH1)`
  ${tw`text-yellow mb-0`}

  grid-column: 1;
`

const ListH2 = styled(PH2)`
  ${tw`text-white mb-0`}

  grid-column: 1;
`

const FormH2 = styled(PH2)``

const Form = styled.form`
  ${tw`flex flex-col items-center bg-yellow-dark rounded p-5 sm:w-2/3 md:w-full`}

  grid-row: 1 / -1;
  grid-column: 2;

  @media (max-width: ${props => props.theme.screens.md}) {
    grid-row: 3;
    grid-column: 1;
    justify-self: center;
  }
`

const Paragraph = styled.p`
  ${tw`text-sm font-light text-center mt-4`}
`

const addRequestMutation = gql`
  mutation($input: RequestInput!) {
    addRequest(input: $input)
  }
`

export default () => {
  const [addRequestFunc] = useMutation(addRequestMutation)

  const toast = useToast()

  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            car
            city
          }
        }
      }
      background: imageSharp(
        fluid: { originalName: { eq: "background-2.jpg" } }
      ) {
        fluid(quality: 90, maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  const { car, city } = data.site!.siteMetadata!.taxiData!

  return (
    <BackgroundImage
      fluid={[
        "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))",
        (data as any).background.fluid,
      ]}
      Tag="section"
      id="start"
    >
      <Content>
        <H1>
          Срочный набор водителей на новые автомобили {car} в {city}
        </H1>
        <ListH2>
          <List>
            <li>Ежедневные выплаты</li>
            <li>Удобный график, новые автомобили</li>
            <li>Опыт работы не требуется, стаж вождения от 3-х лет</li>
            <li>Фирменная оклейка</li>
          </List>
        </ListH2>
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
              <FormH2>
                Хотите начать работать уже сегодня? Оставляйте заявку, мы
                перезвоним!
              </FormH2>
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
    </BackgroundImage>
  )
}
