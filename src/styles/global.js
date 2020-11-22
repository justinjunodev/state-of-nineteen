import 'reset-css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --nunito: 'Nunito', sans-serif; 
        --poppins: 'Poppins', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    html {
        text-size-adjust: 100%;
    }
    body {
        font-family: var(--nunito);
        font-weight: 400;
    }
    h1, h2, h3, h4 {
        font-family: var(--poppins);
        font-weight: 700;
    }
`

export default GlobalStyles
