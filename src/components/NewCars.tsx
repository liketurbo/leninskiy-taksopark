import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import gql from "graphql-tag"
import React, { useState } from "react"
import useForm from "react-hook-form"
import InputMask from "react-input-mask"
import styled from "styled-components"

import { useMutation } from "@apollo/react-hooks"

import { Query } from "../../types/graphqlTypes"
import useToast from "../hooks/useToast"
import extractNumbers from "../utils/extractNumbers"
import PButton from "./Button"
import PContent from "./Content"
import PH1 from "./H/H1"
import PH2 from "./H/H2"
import Input from "./Input"
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

const Button = styled(PButton)`
  ${tw`bg-red hover:bg-red-dark text-grey-lightest`}
`

const TextInput = styled.input`
  ${Input}
`

const PhoneInput = styled(InputMask)`
  ${Input}
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

  const { register, handleSubmit, reset } = useForm()
  const [phoneNumberValue, setPhoneNumberValue] = useState("")

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
        <Form
          onSubmit={handleSubmit(async ({ name, phone }) => {
            try {
              phone = `${extractNumbers(phone)}`

              if (phone) {
                phone = `+7${phone.slice(1)}`
              }

              await addRequestFunc({
                variables: { input: { name, phone } },
              })

              reset()
              setPhoneNumberValue("")

              toast.show("Ваша заявка отправлена.", "success")
            } catch (err) {
              console.log(err.message)

              toast.show("Ну удалось отправить заявку", "danger")
            }
          })}
        >
          <FormH2>
            Хотите начать работать уже сегодня? Оставляйте заявку, мы
            перезвоним!
          </FormH2>
          <TextInput name="name" ref={register} placeholder="Ваше имя" />
          <PhoneInput
            name="phone"
            mask="8 (999) 999-99-99"
            placeholder="Ваш номер"
            value={phoneNumberValue}
            onChange={e => setPhoneNumberValue(e.target.value)}
            inputRef={register}
          />
          <Button type="submit">Отправить</Button>
          <Paragraph>
            Отправляя заявку, вы соглашаетесь с правилами обработки персональных
            данных
          </Paragraph>
        </Form>
      </Content>
    </BackgroundImage>
  )
}
