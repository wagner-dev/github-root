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
import NoFollowMeIcon from '../../../assets/index/UnFollowers/index.svg'
// import { MetaI } from '../index'

// interface PropsI {
//     unfollowers: MetaI
// }

const NoFollowMeComponent: FC = () => {


    return (
        <Link href='/unfollowers' passHref>
            <a>
                <Body>

                    <Icon>
                        <Image
                            alt="Usuários que não te seguem de volta." 
                            src={NoFollowMeIcon} />     
                    </Icon>
                    <Data>
                        <TextBody>
                            <Text>
                                <span>Usuários que não te seguem de volta.</span>
                            </Text>
                            {/* <PeopleText>
                                <span>{unfollowers.length} </span>
                                <span>pessoas</span>
                            </PeopleText> */}
                        </TextBody>
                    </Data>
                </Body>
            </a>
        </Link>
    )
}


export default NoFollowMeComponent