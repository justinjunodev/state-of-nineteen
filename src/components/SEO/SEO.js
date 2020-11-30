import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// A component for SEO, provided by Gatsby. Modified to include social images.
function SEO({ description, lang, meta, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
            url
          }
        }
        file(relativePath: { eq: "metacard.png" }) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  const defaultTitle = data.site.siteMetadata?.title
  const socialCard = `${data.site.siteMetadata.url}${data.file.publicURL}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        defaultTitle ? `%s | ${defaultTitle} | Covid-19 Data for U.S.` : null
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: socialCard,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: socialCard,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
