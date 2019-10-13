const brand = "Рено перевозки"

module.exports = {
  siteMetadata: {
    title: brand,
    author: "Ramzan Chasygov <theliketurbo@gmail.com>",
    description: `Таксопарк - ${brand}`,
    taxiData: {
      brand,
      inn: "060200202147",
      number: "+7 (967) 696-94-06",
      url: "reno-perevozki.ru",
      address: "РФ, Краснодарский край, г. Сочи, ул. Петрозаводская, д. 26/2",
      workTime: "Пн. - Пт. с 8:00 - 18:00",
    },
  },
  plugins: [
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-styled-components",
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
