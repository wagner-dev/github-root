import { GetServerSidePropsContext } from 'next'
import { CookieSerializeOptions } from 'cookie'
import { parseCookies, setCookie } from 'nookies'

interface PersistCookie {
    ctx?: GetServerSidePropsContext | null
    name: string,
    data: any,
    optionsForm?: CookieSerializeOptions
}

export const persistCookie = 
    ({ ctx, name, data, optionsForm }: PersistCookie): boolean => {
        
    const optionsDefault = {
        maxAge: 86400 * 30, // 86400 = 1 day
        secure: true,
        path: '/'
    }

    const options = optionsForm 
    ? optionsForm
    : optionsDefault

    const persisted = setCookie(ctx, name, data, options)


    const persistentResult = persisted
    ? true
    : false

    return persistentResult
}

interface GetCookie {
    ctx?: GetServerSidePropsContext | null,
    name: string
}

export const getCookie = ({ ctx, name }: GetCookie) => {
    const cookie = parseCookies(ctx)[name]

    const cookieResult = cookie
    ? cookie
    : false

    return cookieResult
}