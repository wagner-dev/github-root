import { GetServerSideProps, NextPage } from 'next'
import api from 'axios'
import IDontFollowBackComponent from '../components/IDontFollowBack/index'
import Menu from '../global/menu/index'
import VerifyAuth from '../services/auth'
import Head from '../services/Head/index'
import { AuthI } from './login'

export interface DataI {
    avatar_url: string,
    login: string
}

export interface PropsI {
    data: DataI[],
    auth?: AuthI
}

const IDontFollowBackPage: NextPage<PropsI> = ({ data, auth }) => {
    
    return (
        <>  
            <Head 
                description="O github root obtêm informações privilegiadas da aplicação do github para melhor gerenciamento de sua conta. Com o github root, você terá acesso às pessoas que não te seguem de volta e pessoas que você não segue de volta de uma maneira muito simples."
                title="Github root - Usuários que não sigo de volta"
            />

            <Menu auth={auth} />
            <IDontFollowBackComponent data={data} />
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
            const { data: { data } } = await api.get(`${ process.env.HOST || "http://localhost:3000" }/api/i-dont-follow-back`, { headers: { Authorization: `${username}` } })
    
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

export default IDontFollowBackPage


