module.exports = {
  siteMetadata: {
    title: `State of Nineteen`,
    description: `The lastest Covid-19 data for the United States by state.`,
    url: `https://www.stateofnineteen.com`,
    author: `@justinjunodev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Nunito`,
              variants: [`400`, `400i`, `700`, `700i`],
            },
            {
              family: `Poppins`,
              variants: [`700`, `700i`],
            },
          ],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
