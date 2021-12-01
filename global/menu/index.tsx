import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoIcon from '../../assets/logo/index.light.png'
import {
    Body,
    Logo,
    Options,
    SignInButton,
    OptionIcon
} from './styled'
import NoFollowBackIcon from '../../assets/index/NoFollow/index.svg'
import UnFollowersIcon from '../../assets/index/UnFollowers/index.svg'
import { AuthI } from '../../pages/login'

interface PropsI {
    auth?: AuthI
}

const MenuComponent: FC<PropsI> = ({ auth }) => {


    const UnAuth = () => {
        return (
            <SignInButton>
                    <Link href="/login">
                        <a>
                            <input
                                type="submit"
                                value="Entrar" />
                        </a>
                    </Link>
            </SignInButton>
        )
    }

    const Auth = () => {
        return (
            <>
                <Link href="/no-follow-back" >
                    <a>
                        <OptionIcon>
                            
                            <Image
                                width={30}
                                height={30} 
                                src={NoFollowBackIcon} />

                        </OptionIcon>
                    </a>
                </Link>
                <Link href="/unfollowers" >
                    <a>
                        <OptionIcon>

                            <Image
                                width={30}
                                height={30} 
                                src={UnFollowersIcon} />

                        </OptionIcon>
                    </a>
                </Link>
            </>
        )
    }

    return (
        <Body>
            <Logo>
                <Link href="/">
                    <a>
                        <Image 
                            src={LogoIcon}
                            width={200}
                            height={61}
                            alt="Logo icon"
                            priority={true}
                            blurDataURL={LogoIcon.blurDataURL}  />
                    </a>
                </Link>
            </Logo>

            <Options>
                { auth?.auth 
                    ? <Auth />
                    : <UnAuth />
                }
            </Options>

        </Body>
    )
}

export default MenuComponent