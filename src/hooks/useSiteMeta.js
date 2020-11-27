import { graphql, useStaticQuery } from 'gatsby'

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
