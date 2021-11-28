import { FC } from 'react'

import Image from 'next/image'
import EmptyIcon from '../../../assets/empty/index.svg'

import {
    Body,
    ImageIcon,
    Text
} from './styled'

const EmptyComponent: FC = () => {
    return (
        <Body>
            <ImageIcon>
                <Image
                    priority={true} 
                    alt="Nenhum usuário :)"
                    src={EmptyIcon} />
            </ImageIcon>
            <Text>
                <span>Nenhum usuário :)</span>
            </Text>
        </Body>
    )
}


export default EmptyComponent