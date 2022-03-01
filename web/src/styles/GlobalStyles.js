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
        margin: 0 auto;
        max-width: 1300px;
        width: 100%;
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

    @media (max-width: 400px) {
        .ant-tooltip {
            display: none;
        }
    }

    .ant-progress-bg{
        background: ${(props) => props.theme.colors.primary};
    }

    .ant-notification {
        border: 1px solid ${(props) => props.theme.colors.black_light};
        background: ${(props) => props.theme.colors.black_dark};
        border-radius: 8px;

        .ant-notification-notice-message{
            color: ${(props) => props.theme.colors.primary};
            font-weight: bold;
        }

        .ant-notification-notice-description{
            opacity: 0.6;
            p {
                font-size: 0.8rem;
            }

            span {
                opacity: 1;
                font-weight: bold;
                color: ${(props) => props.theme.colors.primary}; 
            }
        }
        
        div, svg{
            color: ${(props) => props.theme.colors.white};
            background: transparent;
        }
    }
`;
