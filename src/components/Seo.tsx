import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({
  title,
  description = "",
  lang = "ru",
  index = true,
  meta = [],
}: {
  title?: string
  description?: string
  lang?: string
  index?: boolean
  meta?: { name?: string; property?: string; content?: string }[]
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          content: metaDescription,
          name: "description",
        },
        {
          content: title,
          property: "og:title",
        },
        {
          content: metaDescription,
          property: "og:description",
        },
        {
          content: "website",
          property: "og:type",
        },
        {
          content: "summary",
          name: "twitter:card",
        },
        {
          content: site.siteMetadata.author,
          name: "twitter:creator",
        },
        {
          content: title,
          name: "twitter:title",
        },
        {
          content: metaDescription,
          name: "twitter:description",
        },
        {
          content: index ? "all, notranslate" : "none",
          name: "robots",
        },
        ...meta,
      ]}
      title={
        title
          ? `${title} - ${site.siteMetadata.title}`
          : site.siteMetadata.title
      }
    />
  )
}

export default Seo
