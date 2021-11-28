import { NextPageContext } from 'next'
import { getCookie } from '../persist/index'

interface VerifyAuthProps {
    ctx?: Pick<NextPageContext, 'req'> | null,
}

const VerifyAuth = ({ ctx }: VerifyAuthProps) => {
    const options = {
        ctx,
        name: "username_github_root",
    }
    const username = getCookie(options)
    const auth = username 
    ? true
    : false

    const data = {
        auth,
        username
    }

    return data
}


export default VerifyAuth