import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const LinkStyles = css`
  position: relative;
  color: var(--black);
  text-decoration: none;
  transition: color 0.1s ease-in-out;
  span {
    z-index: 1;
    position: relative;
  }
  ::after {
    content: '';
    position: absolute;
    left: -0.1px;
    right: -0.1px;
    bottom: 0;
    height: 100%;
    transform: scaleY(0.1);
    transition: transform 0.1s ease-in-out;
    transform-origin: bottom;
    background-color: var(--red);
  }
  :hover {
    color: var(--cream);
  }
  :hover::after {
    transform: scaleY(1);
  }
`

export const ExternalLink = styled.a`
  ${LinkStyles};
`

export const GatsbyLink = styled(Link)`
  ${LinkStyles};
`
