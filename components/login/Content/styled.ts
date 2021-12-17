import styled from 'styled-components'

export const Body = styled.article`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 620px){
        width: 100%;
    }
`

export const Form = styled.div`
    background: #fff;
    padding: 1rem 1.5rem 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    width: 60%;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 1px  #d7d7d7;

    input {
        margin: .4rem 0rem;
        padding: 1rem .5rem;
        border: none;
        border-radius: 4px;
        outline: none;   
        text-align: center;
    }

    @media only screen and (max-width: 820px){
        width: 70%;
    }
    @media only screen and (max-width: 620px){
        width: 95%;
    }
`

export const Title = styled.div`
    font-size: 1.1rem;
`

export const InputText = styled.div`


    input {
        width: 100%;
        background: #F1F1F1;
    }

`

export const SubmitButton = styled.div`
    
    input {
        width: 100%;
        background: #000;
        color: #fff;
        cursor: pointer;
    }
`

export const Description = styled.div`
    width: 60%;
    padding: 1rem 0rem;
    
    @media only screen and (max-width: 820px){ width: 70%; }
    @media only screen and (max-width: 620px){ width: 95%; }
`