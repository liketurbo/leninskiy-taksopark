import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import useForm from "react-hook-form"
import InputMask from "react-input-mask"
import styled from "styled-components"

import { Query } from "../../types/graphqlTypes"
import PButton from "../components/Button"
import PContent from "../components/Content"
import H1 from "../components/H/H1"
import H2 from "../components/H/H2"
import Input from "../components/Input"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H2>
            Подключитесь к официальному партнеру Яндекс Такси в городе {city}.
          </H2>
          <TextInput name="name" ref={register} placeholder="Ваше имя" />
          <PhoneInput
            mask="8 (999) 999-99-99"
            name="phone"
            placeholder="Ваш номер"
            ref={register}
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
