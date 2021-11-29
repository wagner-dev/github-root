import styled from 'styled-components'


export const Body = styled.header`
    width: 100%;
    padding: .5rem 1rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 8px 1px #c7c7c7;
    align-items: center;
`
export const Logo = styled.div`

`

export const Options = styled.div`
    display: flex;
    margin: 0rem 1rem;
`
export const SignInButton = styled.div`
    
    input{
        cursor: pointer;
        padding: .9rem 2rem;
        background: #000;
        color: #fff;
        border-radius: 8px;
        border: none;
        margin: 0rem .5rem;

        @media only screen and (max-width: 620px){ padding: .8rem 1rem; }
    }
`

export const OptionIcon = styled.div`
    margin: 0rem 1rem;

    @media only screen and (max-width: 620px){
        margin: 0rem .4rem;
    }
`