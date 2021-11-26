import { FC, useState } from 'react'
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

import { PropsI } from '../../pages/index'

const IndexPage: FC<PropsI> = ({ profile: profileData }) => {
    
    const profile: ProfileI | undefined = profileData
    
    return (
        <Body>
            <Profile profile={profile} />
            <DontFollow />
            <DontFollowMe />
        </Body>
    )
}

export default IndexPage