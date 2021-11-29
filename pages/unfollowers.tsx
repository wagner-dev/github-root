import { GetServerSideProps, NextPage } from 'next'
import api from 'axios'
import UnFollowersComponent from '../components/unfollowers/index'
import Menu from '../global/menu/index'
import VerifyAuth from '../services/auth'
import { AuthI } from '../pages/login'

export interface DataI {
    avatar_url: string,
    login: string
}

export interface PropsI {
    data: DataI[],
    auth?: AuthI
}

const UnFollowersPage: NextPage<PropsI> = ({ data, auth }) => {
    
    return (
        <>
            <Menu auth={auth} />
            <UnFollowersComponent data={data} />
        </>
    ) 

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const redirectDefault = {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
    
    try{
        const authResult = VerifyAuth({ ctx })
        if(authResult.auth){
            const { username } = authResult
            const { data: { data } } = await api.get(`${ process.env.HOST || "http://localhost:3000" }/api/unfollowers`, { headers: { Authorization: `${username}` } })
    
            return {
                props: {
                    data,
                    auth: authResult
                }
            }
        }
        else 
            return redirectDefault

    }
    catch{

        return redirectDefault
    
    }
}

export default UnFollowersPage


