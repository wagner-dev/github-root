import styled from 'styled-components'

export const Body = styled.main`
    width: 55%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 920px){
        width: 60%;
    }
    @media only screen and (max-width: 820px){
        width: 70%;
    }
    @media only screen and (max-width: 720px){
        width: 80%;
    }
    @media only screen and (max-width: 620px){
        width: 95%;
    }
`

export const Title = styled.div`
    padding: .5rem 1rem;
    background: #fff;
    border-radius: 8px;
    
    h2{
        font-size: 1.175rem;
    
        
        @media only screen and (max-width: 620px){
            font-size: 1.075rem;
        }
    }
    
`

interface DataListI {
    fix: boolean
}

export const DataList = styled.article`
    width: 100%;
    height: ${({ fix }: DataListI) => fix ? "65vh" : "auto"};
    margin: .5rem 0rem 0rem 0rem;
    background: #fff;
    border-radius: 8px;
    padding: 1rem;



    @media only screen and (max-width: 620px){
        padding: .5rem;
    }
`