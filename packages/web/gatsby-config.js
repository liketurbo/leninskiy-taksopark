const brand = "Рено перевозки"
const city = "Сочи"

module.exports = {
  siteMetadata: {
    title: `Таксопарк ${brand} - официальный партер Яндекс.Такси в ${city}`,
    author: "Ramzan Chasygov <theliketurbo@gmail.com>",
    description: `Подключитесь к Яндекс.Такси в ${city}. Получите первые деньги с заказов уже сегодня. Стабильный заработная плата. Гибкий график. Самая маленькая комиссия автопарка. Работа на наших автомобилях - требуются водители!`,
    taxiData: {
      brand,
      inn: "060200202147",
      number: "+79676969406",
      url: "reno-perevozki.ru",
      email: "help@reno-perevozki.ru",
      address: "РФ, Краснодарский край, г. Сочи, ул. Петрозаводская, д. 26/2",
      coordinates: [43.460418, 39.925793],
      workTime: "Пн. - Пт. с 8:00 - 18:00",
    },
  },
  plugins: [
    /**
     * Gatsby style handling
     * START
     */
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-styled-components",
    /**
     * END
     */
    /**
     * Gatsby image handling
     * START
     */
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    /**
     * Adds in Gatsby image handling
     * END
     */
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
