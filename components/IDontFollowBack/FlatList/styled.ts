import styled from 'styled-components'


export const ProfileItem = styled.header`
    display: flex;
    align-items: center;
    padding: .3rem;
    border-radius: 8px;
    border: 1px solid #CCCCCC;
    margin: .5rem 0rem;
`
export const ProfileImage = styled.div`
    display: flex;


    img{
        border-radius: 8px;
        user-select: none;
    }
`

export const ProfileNameBody = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0rem .5rem 0rem 1rem;
    justify-content: space-between;

    @media only screen and (max-width: 620px){
        padding: 0rem .2rem 0rem .5rem;
    }
`

export const ProfileName = styled.div`
    width: 100%;
    overflow: hidden;
`

export const ProfileButton = styled.div`
    input{
        padding: .2rem 1rem;
        color: #fff;
        background: #000;
        border-radius: 4px;
        border: none;
        cursor:  pointer;
        
        
        @media only screen and (max-width: 620px){
            padding: .2rem .5rem;    
        }
    }

`
