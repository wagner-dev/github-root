import { NextPage, GetServerSideProps } from 'next'
import LoginComponent from '../components/login/index'
import VerifyAuth from '../services/auth/index'
import Menu from '../global/menu/index'

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


