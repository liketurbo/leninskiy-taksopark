import { graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import React, { useState } from "react"
import useForm from "react-hook-form"
import InputMask from "react-input-mask"
import styled from "styled-components"

import { useMutation } from "@apollo/react-hooks"

import { Query } from "../../types/graphqlTypes"
import PButton from "../components/Button"
import PContent from "../components/Content"
import H1 from "../components/H/H1"
import H2 from "../components/H/H2"
import Input from "../components/Input"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import extractNumbers from "../utils/extractNumbers"

const Content = styled(PContent)`
  ${tw`flex flex-col items-center`}
`

const Form = styled.form`
  ${tw`flex flex-col items-center bg-yellow-dark rounded p-5 w-full sm:w-2/3`}
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
    <Layout>
      <SEO title="Подключение" />
      <Content>
        <H1>Заявка на подключение</H1>
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
            } catch (err) {
              console.log(err.message)
            }
          })}
        >
          <H2>
            Подключитесь к официальному партнеру Яндекс Такси в городе {city}.
          </H2>
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
    </Layout>
  )
}
