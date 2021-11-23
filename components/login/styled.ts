import styled from 'styled-components'

export const Body = styled.main`
    display: flex;
    width: 100%;
    height: 80vh;
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem 0rem;

    @media only screen and (max-width: 620px){
        flex-direction: column;
        justify-content: center;
        height: auto;
    }
`