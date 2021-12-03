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
                    alt="Icon"
                    src={ImageIcon}
                    width={718}
                    height={541}
                    placeholder="blur"
                    blurDataURL={ImageIcon}
                />
            </Icon>
        </Body>
    )
}


export default IconComponent