const brand = "Рено перевозки"
const city = "Сочи"
const url = "reno-perevozki.ru"

module.exports = {
  siteMetadata: {
    title: `Таксопарк ${brand}`,
    author: "Ramzan Chasygov <theliketurbo@gmail.com>",
    description: `Подключитесь к Яндекс.Такси в городе ${city}. Получите первые деньги с заказов уже сегодня. Стабильный заработная плата. Гибкий график. Самая маленькая комиссия автопарка. Работа на наших автомобилях - требуются водители!`,
    siteUrl: `https://${url}`,
    taxiData: {
      brand,
      city,
      url,
      car: "Renault Logan 2019",
      owner: "ИП Часыгов Ахмед Абдулмажитович",
      inn: "060200202147",
      phone: "+79388780606",
      email: "ahmed.aa15613541@yandex.ru",
      address: "РФ, Краснодарский край, г. Сочи, ул. Петрозаводская, д. 26/2",
      coordinates: [43.460418, 39.925793],
      workTime: "Пн. - Пт. с 8:00 - 17:00",
    },
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: brand,
        short_name: brand,
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `${__dirname}/src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
