import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import {
    Body,
    Icon,
    Data,
    TextBody,
    Text,
    // PeopleText
} from './styled'
import NoFollowIcon from '../../../assets/index/noFollow/index.svg'
// import { MetaI } from '../index'

// interface PropsI {
//     noFollow: MetaI 
// }

const NoFollowComponent: FC = () => {
    return (

        <Link href="/no-follow-back" passHref>
            <a>
                <Body>
                    <Icon>
                        <Image
                            alt="Usuarios que não sigo de volta." 
                            src={NoFollowIcon} />     
                    </Icon>
                    <Data>
                        <TextBody>
                            <Text>
                                <span>Usuarios que não sigo de volta.</span>
                            </Text>
                            {/* <PeopleText>
                                <span>{noFollow.length} </span>
                                <span>pessoas</span>
                            </PeopleText> */}
                        </TextBody>
                    </Data>
                </Body>
            </a>
        </Link>
    )
}


export default NoFollowComponent