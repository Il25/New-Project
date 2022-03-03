import styled from 'styled-components';

export const ListItemWrapper = styled.div`
    color: #FFFFFF;
    width: 350px;
    background-color: #bf07ac;
    height: 70px;
    margin: 20px auto;
    border-radius: 5px;
`

export const Wrapper = styled.div`
    padding: 10px;
    position: relative;
`

export const ListItemTextArea = styled.textarea`     
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    padding: 10px;
    outline: none;
    width: 170px;
    resize: none;
   
`

export const ListItemSpan = styled.span`
    position: absolute;
    right: 15px;
    font-size: 12px;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.3s all;

    &:hover {
        color: black;
    }
`
