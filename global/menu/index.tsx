import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import LogoIcon from '../../assets/logo/index.light.png'
import {
    Body,
    Logo,
    Options,
    SignInButton
} from './styled'

const MenuComponent: FC = () => {

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
                            placeholder="blur"
                            blurDataURL={LogoIcon.blurDataURL}  />
                    </a>
                </Link>
            </Logo>

            <Options>
                <SignInButton>
                    <Link href="/login">
                        <a>
                            <input
                                type="submit"
                                value="Entrar" />
                        </a>
                    </Link>
                </SignInButton>
            </Options>

        </Body>
    )
}

export default MenuComponent