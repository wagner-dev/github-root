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
import NoFollowMeIcon from '../../../assets/index/noFollowMe/index.svg'
import { MetaI } from '../index'

interface PropsI {
    unfollowers: MetaI
}

const NoFollowMeComponent: FC<PropsI> = ({ unfollowers }) => {


    return (
        <Link href='/no-follow-me' passHref>
            <a>
                <Body>

                    <Icon>
                        <Image src={NoFollowMeIcon} />     
                    </Icon>
                    <Data>
                        <TextBody>
                            <Text>
                                <span>Pessoas que não me seguem de volta.</span>
                            </Text>
                            <PeopleText>
                                <span>{unfollowers.length} </span>
                                <span>pessoas</span>
                            </PeopleText>
                        </TextBody>
                    </Data>
                </Body>
            </a>
        </Link>
    )
}


export default NoFollowMeComponent