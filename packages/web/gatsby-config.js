const brand = "Рено перевозки"
const city = "Сочи"

module.exports = {
  siteMetadata: {
    title: `Таксопарк ${brand}`,
    author: "Ramzan Chasygov <theliketurbo@gmail.com>",
    description: `Подключитесь к Яндекс.Такси в городе ${city}. Получите первые деньги с заказов уже сегодня. Стабильный заработная плата. Гибкий график. Самая маленькая комиссия автопарка. Работа на наших автомобилях - требуются водители!`,
    taxiData: {
      brand,
      city,
      car: "Renault Logan 2019",
      owner: "ИП Часыгов Ахмед Абдулмажитович",
      inn: "060200202147",
      phone: "+79649464645",
      url: "reno-perevozki.ru",
      email: "help@reno-perevozki.ru",
      address: "РФ, Краснодарский край, г. Сочи, ул. Петрозаводская, д. 26/2",
      coordinates: [43.460418, 39.925793],
      workTime: "Пн. - Пт. с 8:00 - 17:00",
    },
  },
  plugins: [
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
