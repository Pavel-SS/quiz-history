// import style, { createGlobalStyle } from 'styled-components';

import style, { createGlobalStyle } from 'styled-components';
import BGimg from './images/BGimg.jpg';

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }

    body {
        background-image: url(${BGimg});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Montserrat';
    }
`
export const Wrapper = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        background-size: 100%;
        padding: 5px 15px;
        font-family: Fascinate Inline;
        background-image: linear-gradient(180deg, #fff, rgb(219, 224, 67));
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(3px 2px rgb(19, 19, 22));
        
        font-size: 27px;
        font-weight: 900
    }
    .title{
        font-family: Fascinate Inline;
        background-image: linear-gradient(180deg, #fff, rgb(242, 205, 113));
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(1px 1px rgb(224, 156, 47));
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
    .score {
        color: rgb(224, 156, 47);
        font-size: 2rem;
        margin: 0
    }


`