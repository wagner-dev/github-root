import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import {
    Body,
    Icon,
    Data,
    TextBody,
    Text,
    PeopleText
} from './styled'
import NoFollowIcon from '../../../assets/index/NoFollow/index.svg'
import { MetaI } from '../index'

interface PropsI {
    noFollow: MetaI 
}

const NoFollowComponent: FC<PropsI> = ({ noFollow }) => {
    return (

        <Link href="/no-follow" passHref>
            <a>
                <Body>
                    <Icon>
                        <Image src={NoFollowIcon} />     
                    </Icon>
                    <Data>
                        <TextBody>
                            <Text>
                                <span>Pessoas que não sigo de volta.</span>
                            </Text>
                            <PeopleText>
                                <span>{noFollow.length} </span>
                                <span>pessoas</span>
                            </PeopleText>
                        </TextBody>
                    </Data>
                </Body>
            </a>
        </Link>
    )
}


export default NoFollowComponent