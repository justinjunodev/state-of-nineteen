import 'reset-css'
import { createGlobalStyle, css } from 'styled-components'

// A wrapper for content to reduce styling redundancy and provide single source of truth.
export const wrapper = css`
  max-width: 864px;
  width: calc(100% - var(--scale-6));
  margin: 0 auto;
`

// Breakpoints/queries to reduce styling redundancy and provide single source of truth.
const breakpoints = [480, 640, 768]
export const queries = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

// A few base aka global styles used throughout the appliacation.
export const GlobalStyles = createGlobalStyle`
    :root {
        --nunito: 'Nunito', sans-serif; 
        --poppins: 'Poppins', sans-serif;
        --scale-8: 5.653rem;
        --scale-7: 3.998rem;
        --scale-6: 2.827rem;
        --scale-5: 1.999rem;
        --scale-4: 1.414rem;
        --scale-3: 1rem;
        --scale-2: .707rem;
        --scale-1: 0.5rem; 
        --red: #d72047;
        --yellow: #f2b64c;
        --cream: #fff8ed;
        --black: #333333;
        --shadow: 0 .707rem 1rem .5rem rgba(0,0,0,0.1);
    }
    * {
        box-sizing: border-box;
    }
    html {
        text-size-adjust: 100%;
        font-size: 16px;
    }
    body {
        font-family: var(--nunito);
        font-size: var(--scale-3);
        font-weight: 400;
        line-height: var(--scale-5);
        color: var(--black);
        background: var(--yellow);
    }
    h1, h2, h3, h4 {
        font-family: var(--poppins);
        font-weight: 700;
        text-transform: uppercase;
    }
    h1 {
        font-size: var(--scale-7);
        line-height: var(--scale-7);
    }
    h2 {
        font-size: var(--scale-6);
        line-height: var(--scale-7);
    }
    h3 {
        font-size: var(--scale-5);
    }
    h4 {
        font-size: var(--scale-4);
    }
    strong, b {
        font-weight: 700;
    }
    em, i {
        font-style: italic;
    }
    small {
        font-size: var(--scale-2);
    }
    ${queries[2]} {
        html {
            font-size: 18px;
        }
    }
`
