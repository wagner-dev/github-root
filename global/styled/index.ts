import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background: #f1f1f1;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

input, span, a, p {
    font-size: .975rem;

    @media only screen and (max-width: 620px){
        font-size: .875rem;
    }
}

`

export default GlobalStyle