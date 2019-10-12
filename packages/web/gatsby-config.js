module.exports = {
  siteMetadata: {
    title: "Рено перевозки",
    author: "Ramzan Chasygov <theliketurbo@gmail.com>",
    description: "Таксопарк - Рено перевозки",
  },
  plugins: [
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Таксопарк - Рено перевозки",
        short_name: "Рено перевозки",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `${__dirname}/src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
