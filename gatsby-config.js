const brand = "Ленинский таксопарк"
const city = "Москва"
const url = "https://leninskiy-taksopark.su"

module.exports = {
  pathPrefix: "/leninskiy-taksopark",
  siteMetadata: {
    title: "Ленинский таксопарк",
    author: "Ramazan Chasygov <theliketurbo@gmail.com>",
    description: `Подключитесь к Яндекс.Такси в городе ${city}. Получите первые деньги с заказов уже сегодня. Стабильный заработная плата. Гибкий график. Самая маленькая комиссия автопарка. Работа на наших автомобилях - требуются водители!`,
    siteUrl: url,
    taxiData: {
      brand,
      city,
      url,
      car: "Datsun",
      owner: "ИП Ульянов Владимир Ильич",
      phone: "+78000000000",
      email: "lenin@goverment.su",
      address:
        "Кремль, Тверской район, Центральный административный округ, Москва, Россия",
      coordinates: [55.752004, 37.617734],
      workTime: "Пн. - Пт. с 8:00 - 17:00",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
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
