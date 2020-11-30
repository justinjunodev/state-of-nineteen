import React from 'react'
import Link from '../Link'
import * as S from './styles'
import * as M from './motion'

// Component displays footer with attribute links and copyright info.
const Footer = () => (
  <>
    <S.FooterContent variants={M.FooterContent} initial="hidden" animate="show">
      <S.FooterBuild>
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
        .
      </S.FooterBuild>
      <S.FooterCredit>
        An open-source project by{' '}
        <Link
          isExternal
          to="https://twitter.com/justinjunodev"
          label="Check out Justin Juno on Twitter"
        >
          @JustinJunoDev
        </Link>
      </S.FooterCredit>
      <S.FooterCopyright>
        All Rights Reserved &copy; {new Date().getFullYear()}
      </S.FooterCopyright>
    </S.FooterContent>
    <S.FooterStripes
      variants={M.FooterStripes}
      initial="hidden"
      animate="show"
    />
  </>
)

export default Footer
