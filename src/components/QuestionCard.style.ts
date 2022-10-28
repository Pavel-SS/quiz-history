import styled from "styled-components";



export const AnswerContainer = styled.div `
    width: 500px;
    max-width: 1100px;
    background: rgba(255, 253, 209, .7);
    border-radius: 10px;
    border: 2px solid rgb(214, 157, 12);
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: center;

    p{
        font-size: 1rem;
        font-weight:800;
        color: rgb(50, 50, 51);
        text-shadow: .5px .4px 0px rgba(255, 255, 255, 1);
    }
`
type AnswerBtnProps = {
    correct: boolean;
    userClicked: boolean;
}
export const AnswerBtn = styled.div<AnswerBtnProps>`
    transition: all 0.3s ease;
    :hover {
        button{
           background:rgba(133, 226, 216, .8); 
        }
    }
    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        font-weight: 600;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
        correct
            ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
            : !correct && userClicked
            ? 'linear-gradient(90deg, #FF5656, #C16868)'
            : 'linear-gradient(90deg, #db9d00, #f8ffa3)'};
        border: 0px solid rgba(214, 157, 12, 0);
        box-shadow: 1px .5px 0px rgba(214, 157, 12, 1);
        border-radius: 10px;
        color: rgb(50, 50, 51);
        text-shadow: .5px .4px 0px rgba(255, 255, 255, 1);
    }
`