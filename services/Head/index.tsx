import Head from 'next/head'
import { FC } from 'react'

interface PropsI {
    title: string,
    description: string
}

const HeadComponent: FC<PropsI> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="og:title" content={title} />
            <meta name="twitter:title" content={title} />

            <meta name="description" content={description} />
            <meta name="og:description" content={description} />
            <meta name="twitter:description" content={description} />
        </Head>
    )
}

export default HeadComponent