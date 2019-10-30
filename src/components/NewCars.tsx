import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import useForm from "react-hook-form"
import InputMask from "react-input-mask"
import styled from "styled-components"

import { Query } from "../../types/graphqlTypes"
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormH2>
            Хотите начать работать уже сегодня? Оставляйте заявку, мы
            перезвоним!
          </FormH2>
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
    </BackgroundImage>
  )
}
