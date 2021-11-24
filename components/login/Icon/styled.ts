import styled from 'styled-components'

export const Body = styled.article`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 620px){
        width: 100%;
    }
`
export const Icon = styled.div`
    width: 100%;

    @media only screen and (max-width: 620px){
        img{
            width: 90% !important;
        }
    }
`