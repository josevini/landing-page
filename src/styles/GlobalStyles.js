import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: arial, sans-serif;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
`