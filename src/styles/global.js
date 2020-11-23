import 'reset-css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
        font-size: var(--scale-3);
        font-weight: 400;
        line-height: var(--scale-4);
    }
    h1, h2, h3, h4 {
        font-family: var(--poppins);
        font-weight: 700;
        line-height: var(--scale-5);
        text-transform: uppercase;
    }
    h1 {
        font-size: var(--scale-7);
        line-height: var(--scale-7);
    }
    h2 {
        font-size: var(--scale-6);
        line-height: var(--scale-6);
    }
    h3 {
        font-size: var(--scale-5);
    }
    h4 {
        font-size: var(--scale-4);
    }
    small {
        font-size: var(--scale-2);
    }
`

export default GlobalStyles
