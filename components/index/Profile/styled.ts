import styled from 'styled-components'

export const Body = styled.article`
    padding: 1rem;
    background: #fff;
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media only screen and (max-width: 620px){
        flex-direction: column;
        align-items: center;
        padding: .5rem;
    }
`

export const ImageProfile = styled.div` 
    img{
        border-radius: 8px;
    }

    @media only screen and (max-width: 620px){
        img{
            border-radius: 50%;
        }
    }
`

export const Data = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;

    @media only screen and (max-width: 620px){
        width: 100%;
        padding-left: 0;
    }
`

export const NameBody = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Name = styled.div`
    
    span{
        font-size: 1.575rem;
    }
    @media only screen and (max-width: 620px){
        span{
            font-size: 1.475rem;
        }
    }
`

export const LogOutButton = styled.div`

    input {
        padding: .4rem 1.5rem;
        border: none;
        border-radius: 6px;
        background: #000;
        color: #fff;
        cursor: pointer;
    }
`

export const Bio = styled.div`
    margin: .4rem 0rem 0rem 0rem;
    span{
        color: #717171;
    }
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0rem;

    @media only screen and (max-width: 320px){
        flex-wrap: wrap;
    }
`

export const Card = styled.div`
    width: 30%;
    padding: .8rem;
    border-radius: 8px;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    
    @media only screen and (max-width: 320px){
        padding: .5rem;
        margin: .2rem 0rem;
    }
    `
export const TitleCard = styled.div`

`
export const ValueCard = styled.div`
    span{
        font-size: 1.575rem;   
        
        @media only screen and (max-width: 620px){
            font-size: 1.275rem;   
        }
    }
    
`