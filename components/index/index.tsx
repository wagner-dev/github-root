import { FC } from 'react'
import {
    Body 
} from './styled'

import Profile from './Profile/index'
import IDontFollowBack from './IDontFollowBack/index'
import UnFollowers from './UnFollowers/index'

export interface ProfileI {
    name: string,
    avatar_url: string,
    bio: string,
    followers: number,
    following: number,
    public_repos: number
}

import { PropsI } from '../../pages/index'

const IndexPage: FC<PropsI> = ({ profile }) => {
    
    return (
        <Body>
            <Profile profile={profile} />
            <IDontFollowBack />
            <UnFollowers />
        </Body>
    )
}

export default IndexPage