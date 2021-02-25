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
`;