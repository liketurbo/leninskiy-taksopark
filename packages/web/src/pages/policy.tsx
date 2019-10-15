import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"

import { Query } from "../../types/graphqlTypes"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Container = styled.main`
  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;
`

const Title = styled.h1`
  ${tw`uppercase font-bold text-xl`}
`

const Subtitle = styled.h2`
  ${tw`font-semibold text-lg my-4`}
`

const Paragraph = styled.p<{ indent?: boolean }>`
  ${tw`my-4`}

  ${props =>
    props.indent &&
    css`
      text-indent: ${props => props.theme.spacing["2"]};

      &::before {
        content: "• ";
      }
    `}
`

export default () => {
  const { site } = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          taxiData {
            address
            brand
            inn
            email
            number
            url
            workTime
          }
        }
      }
    }
  `)

  const data = site!.siteMetadata!.taxiData!

  return (
    <Layout>
      <SEO title="Политика конфиденциальности" />
      <Container>
        <Title>
          Политика в отношении обработки и защиты персональных данных.
        </Title>
        <Paragraph>
          Сайт {data.url} ( ООО "{data.brand}")
        </Paragraph>
        <Paragraph>
          Настоящее Положение в отношении обработки персональных данных (далее –
          Политика) составлено в соответствии с пунктом 2 статьи 18.1
          Федерального закона «О персональных данных» № 152-ФЗ от 27 июля 2006
          г., а также иными нормативными правовыми актами Российской Федерации в
          области защиты и обработки персональных данных и действует в отношении
          всех персональных данных (далее – данные), которые Организация (далее
          – Оператор) может получить от субъекта персональных данных, от
          пользователя сети Интернет (далее – Пользователь) во время
          использования им любого из сайтов, сервисов, служб, программ,
          продуктов или услуг ООО «{data.brand}» а также, являющегося стороной
          по гражданско-правовому договору.
        </Paragraph>
        <Paragraph>
          Положение определяет порядок и условия обработки персональных данных
          Оператором - ООО «{data.brand}» и устанавливает порядок работы с
          персональными данными, правила их защиты, определяет права,
          обязанности и ответственность руководителей структурных подразделений
          и работников компании оператора ООО «{data.brand}».
        </Paragraph>
        <Paragraph>
          Оператор вправе вносить изменения в настоящую Политику. При внесении
          изменений в заголовке Политики указывается дата последнего обновления
          редакции. Новая редакция Политики вступает в силу с момента ее
          размещения на сайте, если иное не предусмотрено новой редакцией
          Политики.
        </Paragraph>
        <Paragraph>
          Использование сайта Оператора Пользователем означает согласие с
          настоящей Политикой конфиденциальности и условиями обработки
          персональных данных Пользователя.
        </Paragraph>
        <Paragraph>
          В случае несогласия с условиями Политики конфиденциальности
          Пользователь должен прекратить использование сайта Оператора.
        </Paragraph>
        <Paragraph>
          Настоящая Политика конфиденциальности применяется к сайту Оператора.
          Оператор контролирует и не несет ответственность за сайты третьих лиц,
          на которые Пользователь может перейти по ссылкам, доступным на сайте
          Оператора.
        </Paragraph>
        <Paragraph>
          Оператор не проверяет достоверность персональных данных,
          предоставляемых Пользователем.
        </Paragraph>
        <Subtitle>1. Термины и определения.</Subtitle>
        <Paragraph>
          В настоящей Политике конфиденциальности используются следующие
          термины:
        </Paragraph>
        <Paragraph indent>
          «Оператор» – организация, самостоятельно или совместно с другими
          лицами организующая обработку персональных данных, а также
          определяющая цели обработки персональных данных, подлежащих обработке,
          действия (операции), совершаемые с персональными данными
        </Paragraph>
        <Paragraph indent>
          «Персональные данные» - любая информация, относящаяся к прямо или
          косвенно определенному, или определяемому физическому лицу (субъекту
          персональных данных)
        </Paragraph>
        <Paragraph indent>
          «Обработка персональных данных» - любое действие (операция) или
          совокупность действий (операций), совершаемых с использованием средств
          автоматизации или без использования таких средств с персональными
          данными, включая сбор, запись, систематизацию, накопление, хранение,
          уточнение (обновление, изменение), извлечение, использование, передачу
          (распространение, предоставление, доступ), обезличивание,
          блокирование, удаление, уничтожение персональных данных
        </Paragraph>
        <Paragraph indent>
          «Конфиденциальность персональных данных» - обязательное для соблюдения
          Оператором или иным получившим доступ к персональным данным лицом
          требование не допускать их распространения без согласия субъекта
          персональных данных или наличия иного законного основания
        </Paragraph>
        <Paragraph indent>
          «Сайт Оператора» — это совокупность связанных между собой веб-страниц,
          размещенных в сети Интернет по уникальному адресу (URL):{" "}
          {data.address}, далее сайт Оператора
        </Paragraph>
        <Paragraph indent>
          «Пользователь сайта Оператора» (далее Пользователь) – лицо, имеющее
          доступ к сайту Оператора, посредством сети Интернет и использующее
          информацию, материалы и продукты сайта Оператора
        </Paragraph>
        <Paragraph indent>
          «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и
          хранимый на компьютере пользователя, который веб-клиент или
          веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при
          попытке открыть страницу соответствующего сайта
        </Paragraph>
        <Paragraph indent>
          «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, через
          который Пользователь получает доступ на сайт Оператора
        </Paragraph>
        <Subtitle>2. Предмет защиты и обработки персональных данных.</Subtitle>
        <Paragraph>
          2.1. Настоящая Политика конфиденциальности устанавливает обязательства
          Оператора по неразглашению и обеспечению режима защиты
          конфиденциальности персональных данных, которые Пользователь
          предоставляет при регистрации на сайте Оператора, по запросу Оператора
          при использовании сайта Оператора, во время использования им любого из
          сайтов, сервисов, служб, программ, продуктов или услуг Оператора, при
          подписке на информационную e-mail рассылку, а также являющегося
          стороной по гражданско-правовому договору.
        </Paragraph>
        <Paragraph>
          2.2. Персональные данные, разрешённые к обработке в рамках настоящей
          Политики конфиденциальности, предоставляются Пользователем путём
          заполнения форм на сайте Оператора, либо направления Оператору иным
          путем и включают в себя следующую информацию:
        </Paragraph>
        <Paragraph indent>Фамилию, имя, отчество Пользователя</Paragraph>
        <Paragraph indent>
          Контактный данные Пользователя (телефон, адрес электронной почты)
        </Paragraph>
        <Paragraph indent>
          Данные основного документа, удостоверяющего личность
        </Paragraph>
        <Paragraph indent>
          Финансовая информация, включая номер кредитной или дебетовой карты
          (только последние 4 цифры номера карты) или иную платёжную информацию
        </Paragraph>
        <Paragraph indent>
          Место жительство Пользователя (при необходимости)
        </Paragraph>
        <Paragraph indent>Фотографию (при необходимости)</Paragraph>
        <Subtitle>3. Условия обработки персональных данных</Subtitle>
        <Paragraph>
          3.1. Оператор защищает Данные, которые автоматически передаются при
          посещении страниц:
        </Paragraph>
        <Paragraph indent>IP адрес</Paragraph>
        <Paragraph indent>Информация из cookies</Paragraph>
        <Paragraph indent>Информация о браузере</Paragraph>
        <Paragraph indent>Время доступа</Paragraph>
        <Paragraph indent>Реферер (Адрес предыдущей страницы)</Paragraph>
        <Paragraph>
          3.2. Оператор осуществляет сбор статистики об IP-адресах своих
          посетителей. Данная информация используется с целью предотвращения,
          выявления и решения технических проблем.
        </Paragraph>
        <Paragraph>
          3.3. Любая иная персональная информация неоговоренная выше (история
          посещения, используемые браузеры, операционные системы и т.д.)
          подлежит надежному хранению и нераспространению, за исключением
          случаев, предусмотренных в п.п. 5.2. и 5.3. настоящего Положения.
        </Paragraph>
        <Subtitle>4. Цели сбора персональных данных.</Subtitle>
        <Paragraph>
          Персональные данные Пользователя Оператор может использовать в целях:
        </Paragraph>
        <Paragraph indent>
          Идентификации Пользователя, зарегистрированного на сайте Оператора для
          его дальнейшей авторизации, оформления документов и других действий.
        </Paragraph>
        <Paragraph indent>
          Предоставления Пользователю доступа к персонализированным данным сайта
          Оператора.
        </Paragraph>
        <Paragraph indent>
          Установления с Пользователем обратной связи, включая направление
          уведомлений, запросов, касающихся использования сайта Оператора,
          оказания услуг и обработки запросов и заявок от Пользователя.
        </Paragraph>
        <Paragraph indent>
          Исполнение гражданских договоров, заключенных между Оператором и
          Пользователем.
        </Paragraph>
        <Paragraph indent>
          Подтверждения достоверности и полноты персональных данных,
          предоставленных Пользователем.
        </Paragraph>
        <Paragraph indent>
          Создания учетной записи для использования частей сайта Оператора, если
          Пользователь дал согласие на создание учетной записи.
        </Paragraph>
        <Paragraph indent>
          Уведомления Пользователя по электронной почте.
        </Paragraph>
        <Paragraph indent>
          Предоставления Пользователю эффективной технической поддержки при
          возникновении проблем, связанных с использованием сайта Оператора.
        </Paragraph>
        <Paragraph indent>
          Предоставления Пользователю с его согласия специальных предложений,
          информации о ценах, новостной рассылки и иных сведений от имени сайта
          Оператора.
        </Paragraph>
        <Paragraph indent>
          Осуществления рекламной деятельности с согласия Пользователя.
        </Paragraph>
        <Subtitle>
          5. Способы и сроки обработки персональной информации.
        </Subtitle>
        <Paragraph>
          5.1. Обработка персональных данных Пользователя осуществляется без
          ограничения срока, любым законным способом, в том числе в
          информационных системах персональных данных с использованием средств
          автоматизации или без использования таких средств.
        </Paragraph>
        <Paragraph>
          5.2. Пользователь соглашается с тем, что Оператор вправе передавать
          персональные данные третьим лицам, в частности, организациям
          осуществляющим продажу автомобилей, страховым компаниям, органам
          ГИБДД, курьерским службам, организациями почтовой связи (в том числе
          электронной), операторам электросвязи, исключительно в целях
          выполнения запроса Пользователя, оформленного на сайте Оператор,
          включая доставку документации или e-mail сообщений.
        </Paragraph>
        <Paragraph>
          5.3. Персональные данные Пользователя могут быть переданы
          уполномоченным органам государственной власти Российской Федерации
          только по основаниям и в порядке, установленным законодательством
          Российской Федерации.
        </Paragraph>
        <Paragraph>
          5.4. При утрате или разглашении персональных данных Оператор вправе не
          информировать Пользователя об утрате или разглашении персональных
          данных.
        </Paragraph>
        <Paragraph>
          5.5. Оператор принимает необходимые организационные и технические меры
          для защиты персональной информации Пользователя от неправомерного или
          случайного доступа, уничтожения, изменения, блокирования, копирования,
          распространения, а также от иных неправомерных действий третьих лиц.
        </Paragraph>
        <Paragraph>
          5.6. Трансграничная передача персональных данных Оператором не
          осуществляется.
        </Paragraph>
        <Subtitle>6. Согласие на обработку персональных данных.</Subtitle>
        <Paragraph>
          6.1. Настоящим Пользователь как субъект персональных данных дает
          согласие Оператору на обработку своих персональных данных, перечень
          которых указан в п. 1.2 Положения, включая сбор, запись,
          систематизацию, накопление, хранение, уточнение (обновление,
          изменение), извлечение, использование, передачу (распространение,
          предоставление, доступ), с учетом действующего законодательства РФ,
          обезличивание, блокирование, удаление, уничтожение персональных
          данных, с использованием и без использования средств автоматизации, в
          целях, указанных в п. 4 Положения.
        </Paragraph>
        <Paragraph>
          6.2. Предоставленное Пользователем в соответствии с настоящим
          Положением согласие на обработку персональных данных действует до
          достижения Оператором соответствующей цели их обработки или до момента
          отзыва Пользователем указанного согласия на условия п. 6.3 Положения.
        </Paragraph>
        <Paragraph>
          6.3. Предоставленное Пользователем в соответствии с настоящим
          Положением согласие на обработку персональных данных может быть в
          любой момент им отозвано. В указанном случае Оператор обязано
          прекратить обработку персональных данных Пользователя или обеспечить
          прекращение такой обработки (если обработка персональных данных
          осуществляется другим лицом, действующим по поручению Оператора) и в
          случае, если сохранение персональных данных более не требуется для
          целей обработки персональных данных, уничтожить персональные данные
          или обеспечить их.
        </Paragraph>
        <Paragraph>
          6.4. Пользователь может направить Оператору одним из следующих
          способов отзыв предоставленного ранее согласия на обработку
          персональных данных:
        </Paragraph>
        <Paragraph indent>
          Лично обратившись к Оператору с соответствующим заявлением по
          указанному в настоящем положении адресу Оператора
        </Paragraph>
        <Paragraph indent>
          Направив соответствующее заявление почтой по указанному адресу в
          настоящем положении адресу Оператора
        </Paragraph>
        <Paragraph indent>
          Направив соответствующее заявление по электронному адресу:
          {data.email} на сайте Оператора с пометкой «персональные данные»
        </Paragraph>
        <Paragraph indent>
          В ряде случаев, предусмотренных пунктами 2-11 части 1 статьи 6 ФЗ «О
          персональных данных», Оператор может продолжить обработку Ваших
          персональных данных после отзыва Вашего согласия.
        </Paragraph>
        <Subtitle>7. Права и обязанности сторон.</Subtitle>
        <Paragraph>7.1. Пользователь вправе:</Paragraph>
        <Paragraph indent>
          Принимать свободное решение о предоставлении своих персональных
          данных, необходимых для использования сайта Оператора, и давать
          согласие на их обработку.
        </Paragraph>
        <Paragraph indent>
          Обновить, дополнить предоставленную информацию о персональных данных в
          случае изменения данной информации.
        </Paragraph>
        <Paragraph indent>
          Пользователь имеет право на получение у Оператор информации,
          касающейся обработки его персональных данных, если такое право не
          ограничено в соответствии с федеральными законами. Пользователь вправе
          требовать от Оператора уточнения его персональных данных, их
          блокирования или уничтожения в случае, если персональные данные
          являются неполными, устаревшими, неточными, незаконно полученными или
          не являются необходимыми для заявленной цели обработки, а также
          принимать предусмотренные законом меры по защите своих прав.
        </Paragraph>
        <Paragraph>7.2. Оператор обязан:</Paragraph>
        <Paragraph indent>
          Использовать полученную информацию исключительно для целей, указанных
          в п. 4 настоящего Положения.
        </Paragraph>
        <Paragraph indent>
          Обеспечить хранение конфиденциальной информации в тайне, не разглашать
          без предварительного письменного разрешения Пользователя, а также не
          осуществлять продажу, обмен, опубликование, либо разглашение иными
          возможными способами переданных персональных данных Пользователя, за
          исключением п.п. 5.2 и 5.3. настоящего Положения.
        </Paragraph>
        <Paragraph indent>
          Принимать меры предосторожности для защиты конфиденциальности
          персональных данных Пользователя согласно порядку, обычно
          используемого для защиты такого рода информации в существующем деловом
          обороте.
        </Paragraph>
        <Paragraph indent>
          Осуществить блокирование персональных данных, относящихся к
          соответствующему Пользователю, с момента обращения или запроса
          Пользователя, или его законного представителя либо уполномоченного
          органа по защите прав субъектов персональных данных на период
          проверки, в случае выявления недостоверных персональных данных или
          неправомерных действий.
        </Paragraph>
        <Subtitle>8. Заключительные положения.</Subtitle>
        <Paragraph>
          8.1. Настоящее Положение разработано с учетом требований следующих
          нормативных актов:
        </Paragraph>
        <Paragraph indent>Конституция РФ</Paragraph>
        <Paragraph indent>
          Федеральный закон РФ от 27.07.2006 № 149-ФЗ «Об информации,
          информационных технологиях и о защите информации»
        </Paragraph>
        <Paragraph indent>
          Федеральный закон РФ от 27.07.2006 № 152-ФЗ «О персональных данных»
        </Paragraph>
        <Paragraph indent>
          Постановление Правительства РФ от 01.11.2012 № 1119 «Об утверждении
          требований к защите персональных данных при их обработке в
          информационных системах персональных данных»
        </Paragraph>
        <Paragraph indent>
          Постановление Правительства РФ от 15.09.2008 № 687 «Об утверждении
          положения об особенностях обработки персональных данных,
          осуществляемой без использования средств автоматизации»
        </Paragraph>
        <Paragraph indent>
          Приказ ФСТЭК России от 18.02.2013 № 21 «Об утверждении Состава и
          содержания организационных и технических мер по обеспечению
          безопасности персональных данных при их обработке в информационных
          системах персональных данных»
        </Paragraph>
        <Paragraph indent>Устав Оператора</Paragraph>
        <Paragraph indent>
          Договоры заключаемые между Оператором и Пользователем
        </Paragraph>
        <Paragraph indent>Иные применимые акты</Paragraph>
        <Subtitle>9. Вопросы</Subtitle>
        <Paragraph>
          Если у Вас есть какие-либо вопросы в отношении настоящего Положения
          свяжитесь с нами по адресу: {data.address} или по электронной почте:{" "}
          {data.email}
        </Paragraph>
      </Container>
    </Layout>
  )
}
