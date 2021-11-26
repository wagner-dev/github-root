import { GetServerSidePropsContext } from 'next'
import { getCookie } from '../persist/index'

interface VerifyAuthProps {
    ctx?: GetServerSidePropsContext | null,
}

const VerifyAuth = ({ ctx }: VerifyAuthProps) => {
    const options = {
        ctx,
        name: "username_github_root",
    }
    const name = getCookie(options)
    const auth = name 
    ? true
    : false

    const data = {
        auth,
        name
    }

    return data
}


export default VerifyAuth