import styled, { createGlobalStyle } from 'styled-components';
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
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        background-size: 100%;
        padding: 5px 15px;
        font-family: Fascinate Inline;
        background-image: linear-gradient(180deg, #ff5000, rgb(242, 205, 113));
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
        background-image: linear-gradient(180deg, #ff5000, rgb(242, 205, 113));
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
        background-image: linear-gradient(180deg, #ff5000, rgb(242, 205, 113));
        font-weight: 700;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(1.5px 1.5px 1px rgb(0, 0, 0));
        font-size: 2rem;
        margin: 0;
        padding: 5px;
    }
    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, rgb(242, 205, 113));
        border: 2px solid rgba(214, 157, 12, .5);
        box-shadow: 0px 5px 10px rgba(0,0,0,0.4);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        font-size: 1rem;
        font-weight: 600;
        color: rgb(50, 50, 51);
        text-shadow: .5px .4px 0px rgba(255, 255, 255, 1);
    }
    .start{
        max-width: 200px;
    }
`