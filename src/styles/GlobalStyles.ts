import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --green: #8dc63f;
        --blue: #0c3455;
        --white: #fff;
        --text: #a3a3a3;
        --highlight: #282828;
        --background: #dedede;
        --shadow: rgba(0,0,0, .2);
    }
 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    

    html, body, #root {
        height: 100%;

        font-size: 62.5%    // 10/16 - 62.5%    --->   1rem = 10px
    } 

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }

    @media(min-width: 1600px) {
            html { font-size: 76.92%; 
        }
    }
`;