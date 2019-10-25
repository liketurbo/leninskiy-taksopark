import React from "react"
import styled from "styled-components"

import Content from "./Content"
import PH1 from "./H/H1"
import H2 from "./H/H2"
import List from "./List"
import Paragraph from "./Paragraph"
import Steps, { Step } from "./Steps"

const H1 = styled(PH1)`
  ${tw`text-center mb-8`}
`

const Background = styled(Content)`
  ${tw`bg-grey-lighter pt-8`}
`

export default () => (
  <Background>
    <H1>Как начать работу?</H1>
    <Steps>
      <Step
        title={<H2>Свяжитесь с нами</H2>}
        content={<Paragraph>Позвоните нам или оставьте заявку</Paragraph>}
      />
      <Step
        title={<H2>Оформление документов</H2>}
        content={
          <>
            <Paragraph>С собой нужно иметь:</Paragraph>
            <List>
              <li>Паспорт РФ</li>
              <li>Водительское удостоверение</li>
              <li>
                Свидетельство о регистрации ТС (если работаете на своем авто)
              </li>
            </List>
          </>
        }
      />
      <Step
        title={<H2>Активация Приложения</H2>}
        content={
          <Paragraph>
            Помогаем установить приложение Таксометр и проводим обучение
          </Paragraph>
        }
      />
      <Step
        title={<H2>Фотоконтроль</H2>}
        content={
          <Paragraph>
            Проходим фотоконтроль и вы можете приступать к работе
          </Paragraph>
        }
      />
    </Steps>
  </Background>
)
