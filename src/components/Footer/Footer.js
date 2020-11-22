import React from 'react'
import Link from '../Link'

const Footer = () => (
  <footer>
    <p>
      Built with{' '}
      <Link
        isExternal
        to="https://www.gatsbyjs.com/"
        label="Visit Gatsby for more info on static site generation"
      >
        Gatsby
      </Link>
      . Hosted on{' '}
      <Link
        isExternal
        to="https://www.netlify.com"
        label="Visit Netlify for more info on hosting options and services"
      >
        Netlify
      </Link>
      . Analytics by{' '}
      <Link
        isExternal
        to="https://usefathom.com"
        label="Visit Fathom for more info on privacy and analytics"
      >
        Fathom
      </Link>
    </p>
    <p>
      An open-source project by{' '}
      <Link
        isExternal
        to="https://justinjuno.dev"
        label="Visit Justin Juno's personal website"
      >
        @JustinJunoDev
      </Link>
    </p>
    <small>All Rights Reserved &copy; {new Date().getFullYear()}</small>
  </footer>
)

export default Footer
