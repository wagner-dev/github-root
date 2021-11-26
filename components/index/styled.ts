import styled from 'styled-components'

export const Body = styled.main`
    margin: 1rem auto;
    width: 55%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1024px){
        width: 65%;
    }
    @media only screen and (max-width: 920px){
        width: 70%;
    }
    @media only screen and (max-width: 820px){
        width: 75%;
    }
    @media only screen and (max-width: 720px){
        width: 85%;
    }
    @media only screen and (max-width: 620px){
        width: 95%;
    }
`