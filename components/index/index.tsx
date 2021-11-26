import { FC } from 'react'
import {
    Body 
} from './styled'

import Profile from './Profile/index'
import DontFollow from './noFollow/index'
import DontFollowMe from './noFollowMe/index'

const IndexPage: FC = () => {
    return (
        <Body>
            <Profile />
            <DontFollow />
            <DontFollowMe />
        </Body>
    )
}

export default IndexPage