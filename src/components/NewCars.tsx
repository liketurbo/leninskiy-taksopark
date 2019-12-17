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
import InputDefault from "@-taxi-parks-ui/input-default"
import InputPhone from "@-taxi-parks-ui/input-phone"
import screens from "@-taxi-parks-ui/theme-screens"
import spacing from "@-taxi-parks-ui/theme-spacing"

import useToast from "../hooks/useToast"
import PH1 from "./H/H1"
import H2 from "./H/H2"
import List from "./List"

const Container = styled(PContainer)`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${spacing["6"]};

  @media (max-width: ${screens.md}) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr;
  }
`

const H1 = styled(PH1)`
  ${tw`text-yellow mb-0`}

  grid-column: 1;
`

const ListH2 = styled(H2)`
  ${tw`text-white mb-0`}

  grid-column: 1;
`

const Link = styled.a`
  ${tw`font-medium underline hover:no-underline`}
`

const Form = styled.form`
  ${tw`flex flex-col items-center bg-yellow-dark rounded p-5 sm:w-2/3 md:w-full`}

  grid-row: 1 / -1;
  grid-column: 2;

  @media (max-width: ${screens.md}) {
    grid-row: 3;
    grid-column: 1;
    justify-self: center;
  }
`

const P = styled.p`
  ${tw`text-sm font-light text-center mt-4`}
`

const mutationRequestAdd = gql`
  mutation($input: InputRequest!) {
    requestAdd(input: $input)
  }
`

const NewCars = () => {
  const [funcRequestAdd] = useMutation(mutationRequestAdd)

  const toast = useToast()

  const data = useStaticQuery(graphql`
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

  const { car, city } = data.site.siteMetadata.taxiData

  return (
    <BackgroundImage
      fluid={[
        "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))",
        data.background.fluid,
      ]}
      id="start"
      Tag="section"
    >
      <Container>
        <H1>
          {`Срочный набор водителей на новые автомобили ${car} в городе ${city}`}
        </H1>
        <ListH2>
          <List>
            <li>{"Ежедневные выплаты"}</li>
            <li>{"Удобный график, новые автомобили"}</li>
            <li>{"Опыт работы не требуется, стаж вождения от 3-х лет"}</li>
            <li>{"Фирменная оклейка"}</li>
          </List>
        </ListH2>
        <Formik
          initialValues={{
            name: "",
            phone: "",
          }}
          onSubmit={async ({ name, phone }) => {
            try {
              await funcRequestAdd({
                variables: {
                  input: {
                    name,
                    phone,
                  },
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
              <H2>
                {
                  "Хотите начать работать уже сегодня? Оставляйте заявку, мы перезвоним!"
                }
              </H2>
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
              <Button
                disabled={isSubmitting || !isValid}
                type="submit"
                variant="danger"
              >
                {"Заказать звонок"}
              </Button>
              <P>
                {"Заказывая звонок, вы соглашаетесь с "}
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

export default NewCars
