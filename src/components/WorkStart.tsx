import React from "react"
import styled from "styled-components"

import PContent from "./Content"
import PH1 from "./H/H1"
import H2 from "./H/H2"
import List from "./List"
import Paragraph from "./Paragraph"
import Steps, { Step } from "./Steps"

const H1 = styled(PH1)`
  ${tw`text-center mb-8`}
`

const Content = styled(PContent)`
  ${tw`bg-grey-lighter`}
`

const WorkStart = () => (
  <Content>
    <H1>{"Как начать работу?"}</H1>
    <Steps>
      <Step
        content={<Paragraph>{"Позвоните нам или оставьте заявку"}</Paragraph>}
        title={<H2>{"Свяжитесь с нами"}</H2>}
      />
      <Step
        content={
          <>
            <Paragraph>{"С собой нужно иметь:"}</Paragraph>
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
          <Paragraph>
            {"Помогаем установить приложение Таксометр и проводим обучение"}
          </Paragraph>
        }
        title={<H2>{"Активация Приложения"}</H2>}
      />
      <Step
        content={
          <Paragraph>
            {"Проходим фотоконтроль и вы можете приступать к работе"}
          </Paragraph>
        }
        title={<H2>{"Фотоконтроль"}</H2>}
      />
    </Steps>
  </Content>
)

export default WorkStart
