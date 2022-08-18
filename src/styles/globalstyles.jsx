import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --padding-rl: 8%;
    }

    @media (max-width: 420px) {
        :root {
            --padding-rl: 28px;
        }
    }

    @media (max-width: 320px) {
        :root {
            --padding-rl: 10px;
        }
    }


    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    html, body, #app {
        height: 100%;
        min-height: 320px;
        min-width: 280px;
        background-color: #FFF;
    }

    body {
        font-smooth: inherit;
        text-rendering: optimizelegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Poppins', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 15px;
    }

    ::-webkit-scrollbar-track {
        background-color: #F1F1F1;
        border-radius: 100px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 6px solid rgba(0, 0, 0, 0.18);
        border-left: 0;
        border-right: 0;
        background-color: #2c333d;
    }


`

export default GlobalStyle;