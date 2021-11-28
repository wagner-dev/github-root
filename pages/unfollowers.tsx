import { GetServerSideProps, NextPage } from 'next'
import api from 'axios'
import UnFollowersComponent from '../components/unfollowers/index'
import { getCookie } from '../services/persist'

export interface DataI {
    avatar_url: string,
    login: string
}

export interface PropsI {
    data: DataI[]
}

const UnFollowersPage: NextPage<PropsI> = ({ data }) => {
    
    return <UnFollowersComponent data={data} />

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const redirectDefault = {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
    
    try{
        const username = getCookie({ ctx, name: "username_github_root" })
        if(username){
            const { data: { data } } = await api.get(`${ process.env.HOST || "http://localhost:3000" }/api/unfollowers`, { headers: { Authorization: username } })
    
            return {
                props: {
                    data
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


