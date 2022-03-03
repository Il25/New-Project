import styled from 'styled-components';

export const ToDoTitleHeader = styled.h1`
    padding: 20px 10px 5px 10px;
    color: #FFFFFF;
    text-align: center;
`

export const ToDoFormInput = styled.input`
    background-color: rgb(27, 112, 137);
    border: 0;
    width: 260px;
    height: 50px;
    padding: 0 20px;
    margin: 20px;
    font-size: 18px;
    border-radius: 5px;
    color: #FFFFFF;
    outline: none;

    &::placeholder {
    color: rgba(255, 255, 255, 0.5);

    }
`

export const ToDoFormButton = styled.button`
    height: 50px;
    width: 80px;
    border-radius: 5px;
    border: 0;
    background-color: rgb(282, 156, 24);
    cursor: pointer;
    font-weight: bolder;
    color: #FFFFFF;
    transition: 0.3s all;

    &:hover {
        background-color: rgb(219, 133, 20);
        box-shadow: 0 14px 20px rgba(0,0,0,0.45), 0 10px 10px rgba(0,0,0,0.22);
    }
`