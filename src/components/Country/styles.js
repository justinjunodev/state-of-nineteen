import styled, { css, keyframes } from 'styled-components'
import { wrapper, queries } from '../../styles/global'

export const CountryBackground = styled.header`
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--cream) var(--scale-8),
    var(--black) var(--scale-8),
    var(--black) calc(var(--scale-8) + var(--scale-1)),
    rgba(0, 0, 0, 0.1) calc(var(--scale-8) + var(--scale-1)),
    rgba(0, 0, 0, 0.3) calc(var(--scale-8) + var(--scale-1)),
    transparent calc(var(--scale-8) + var(--scale-5))
  );
`

export const CountryContent = styled.div`
  ${wrapper};
  z-index: 1;
  text-align: center;
  margin-bottom: var(--scale-8);
  padding: var(--scale-5);
  background: var(--yellow);
  border-top: var(--scale-1) solid var(--black);
  border-bottom-right-radius: var(--scale-3);
  border-bottom-left-radius: var(--scale-3);
  box-shadow: var(--shadow);
  ${queries[2]} {
    padding: var(--scale-6);
  }
`

export const CountryHeading = styled.h2`
  margin-bottom: var(--scale-5);
`

export const CountryText = styled.p`
  line-height: var(--scale-5);
`

export const VirusAnimation = keyframes`
  0 {
        transform:rotate(0deg);
    }
   50% {
        transform:rotate(45deg);
    }
`

export const VirusShared = css`
  display: none;
  position: absolute;
  z-index: -1;
  top: -90px;
  animation-name: ${VirusAnimation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  ${queries[2]} {
    display: inline-block;
  }
`

export const CountryVirusLeft = styled.div`
  ${VirusShared};
  left: calc(50% - 622px);
`

export const CountryVirusRight = styled.div`
  ${VirusShared};
  right: calc(50% - 622px);
`
