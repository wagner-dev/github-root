import styled from 'styled-components'

export const Body = styled.article`
    width: 100%;
    padding: 1rem;
    background: #fff;
    margin: 1rem 0rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
`
export const Icon = styled.div`
    width: 12%;
    
`

export const Data = styled.div`
    width: 88%;
    padding-left: 1rem;
`
export const TextBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.div`
    span{
        font-size: 1.075rem;
        
        @media only screen and (max-width: 620px){
            font-size: 1rem;
        }
    }
`

export const PeopleText = styled.div`
    padding: .5rem 1rem;
    background: #f1f1f1;
    border-radius: 4px;


    @media only screen and (max-width: 620px){
        span:last-child {
            display: none;
        }
    }
`   