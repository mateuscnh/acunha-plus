import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;       
    }
    html, body{
        height: 100%;
        background: ${(props) => props.theme.colors.black_dark} no-repeat;
        background-attachment: fixed;
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
        width: 12px;
        right: 2px;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: ${(props) => props.theme.colors.black};
    }
    ::-webkit-scrollbar-track-piece{
        background: ${(props) => props.theme.colors.black_light};
    }
`;
