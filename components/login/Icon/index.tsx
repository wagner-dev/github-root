import Image from 'next/image'
import { FC } from 'react'
import {
    Body,
    Icon
} from './styled'
import ImageIcon from '../../../assets/login/icon/index.svg'

const IconComponent: FC = () => {

    return (
        <Body>
            <Icon>
                <Image 
                    src={ImageIcon}
                    placeholder="blur"
                    width={718}
                    height={541}
                    blurDataURL={ImageIcon}
                />
            </Icon>
        </Body>
    )
}


export default IconComponent