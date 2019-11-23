import React from "react"
import styled from "styled-components"

import PContainer from "@-taxi-parks-ui/container"

import PH1 from "./H/H1"
import H2 from "./H/H2"
import List from "./List"
import Steps, { Step } from "./Steps"

const H1 = styled(PH1)`
  ${tw`text-center`}
`

const P = styled.p`
  ${tw`mb-2`}
`

const Container = styled(PContainer)`
  ${tw`bg-grey-lighter`}
`

const WorkStart = () => (
  <Container>
    <H1>{"Как начать работу?"}</H1>
    <Steps>
      <Step
        content={<P>{"Позвоните нам или оставьте заявку"}</P>}
        title={<H2>{"Свяжитесь с нами"}</H2>}
      />
      <Step
        content={
          <>
            <P>{"С собой нужно иметь:"}</P>
            <List>
              <li>{"Паспорт РФ"}</li>
              <li>{"Водительское удостоверение"}</li>
              <li>
                {
                  "Свидетельство о регистрации ТС (если работаете на своем авто)"
                }
              </li>
            </List>
          </>
        }
        title={<H2>{"Оформление документов"}</H2>}
      />
      <Step
        content={
          <P>
            {"Помогаем установить приложение Таксометр и проводим обучение"}
          </P>
        }
        title={<H2>{"Активация Приложения"}</H2>}
      />
      <Step
        content={
          <P>{"Проходим фотоконтроль и вы можете приступать к работе"}</P>
        }
        title={<H2>{"Фотоконтроль"}</H2>}
      />
    </Steps>
  </Container>
)

export default WorkStart
