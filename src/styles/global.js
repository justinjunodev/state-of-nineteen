import 'reset-css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --nunito: 'Nunito', sans-serif; 
        --poppins: 'Poppins', sans-serif;
        --xxl: 3.998rem;
        --xl: 2.827rem;
        --lg: 1.999rem;
        --md: 1.414rem;
        --sm: 1rem;
        --xs: .707rem;
        --xxs: 0.5rem; 
    }
    * {
        box-sizing: border-box;
    }
    html {
        text-size-adjust: 100%;
        font-size: 18px;
    }
    body {
        font-family: var(--nunito);
        font-size: var(--sm);
        font-weight: 400;
        line-height: var(--md);
    }
    h1, h2, h3, h4 {
        font-family: var(--poppins);
        font-weight: 700;
        line-height: var(--lg);
        text-transform: uppercase;
    }
    h1 {
        font-size: var(--xxl);
        line-height: var(--xxl);
    }
    h2 {
        font-size: var(--xl);
        line-height: var(--xl);
    }
    h3 {
        font-size: var(--lg);
    }
    h4 {
        font-size: var(--md);
    }
    small {
        font-size: var(--xs);
    }
`

export default GlobalStyles
