import { NextPage, GetServerSideProps } from 'next'
import LoginComponent from '../components/login/index'
import VerifyAuth from '../services/auth/index'
import Menu from '../global/menu/index'
import Head from '../services/Head/index'


export interface AuthI {
    auth?: boolean,
    username?: string | boolean
}

interface PropsI {
    auth: AuthI
}

const LoginPage: NextPage<PropsI> = ({ auth }) => {
    return (
        <>  
            <Head 
                description="O github root obtêm informações privilegiadas da aplicação do github para melhor gerenciamento de sua conta. Com o github root, você terá acesso às pessoas que não te seguem de volta e pessoas que você não segue de volta de uma maneira muito simples."
                title="Github root - Login"
            />
        
            <Menu auth={auth} />
            <LoginComponent />
        
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const authResult = VerifyAuth({ ctx })

    return {
        props: {
            auth: authResult
        }
    }

}


export default LoginPage


