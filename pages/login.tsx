import { NextPage, GetServerSideProps } from 'next'
import LoginComponent from '../components/login/index'
import VerifyAuth from '../services/auth/index'

const LoginPage: NextPage = () => {
    return (
        <LoginComponent />
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const authResult = VerifyAuth({ ctx })

    if(authResult.auth){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            auth: authResult
        }
    }

}


export default LoginPage


