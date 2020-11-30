import { graphql, useStaticQuery } from 'gatsby'

// A hook for fetching the site metadata from the Gatsby config.
const useSiteMeta = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMeta
