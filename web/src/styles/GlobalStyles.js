import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;  
        font-family: 'Baloo Bhai 2', cursive;
        font-family: 'Montserrat', sans-serif;     
    }
    html, body{
        height: 100%;
        background: ${(props) => props.theme.colors.radial_gradient};
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
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        max-width: 1300px;
    }

    p, h1 {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.white};
    }

    .ant-tooltip-arrow-content, .ant-tooltip-inner {
        background: ${(props) => props.theme.colors.black};
    }
`;
