import { FC } from 'react'
import {
    Body 
} from './styled'

import Profile from './Profile/index'
import DontFollow from './noFollow/index'
import DontFollowMe from './noFollowMe/index'

export interface ProfileI {
    name: string,
    avatar_url: string,
    bio: string,
    followers: number,
    following: number,
    public_repos: number
}

export interface MetaI {
    length: number
}


import { PropsI } from '../../pages/index'

const IndexPage: FC<PropsI> = ({ profile, unfollowers, no_follow }) => {
    
    return (
        <Body>
            <Profile profile={profile} />
            <DontFollow noFollow={no_follow} />
            <DontFollowMe unfollowers={unfollowers} />
        </Body>
    )
}

export default IndexPage