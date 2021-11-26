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

const NoFollowMeComponent: FC = () => {
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
                                <span>33 </span>
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