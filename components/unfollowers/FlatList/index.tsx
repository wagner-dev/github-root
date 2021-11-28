import { memo, FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
    ProfileItem,
    ProfileImage,
    ProfileName,
    ProfileNameBody,
    ProfileButton
} from './styled'

import { DataI } from '../../../pages/unfollowers'
import { PropsI } from '../../../pages/unfollowers'

const FlatListComponent: FC<PropsI> = ({ data }) => {

    const RenderItem = ({ avatar_url, login }: DataI) => {
        return (
            <ProfileItem>
                <ProfileImage>
                    <Image
                        width={70} 
                        height={70} 
                        alt="Profile image"
                        src={avatar_url} />
                </ProfileImage>
                <ProfileNameBody>
                    <ProfileName>
                        <span>{login}</span>
                    </ProfileName>
                    <ProfileButton>
                        <Link 
                            href={`https://github.com/${login}`} 
                            passHref>

                            <a target="_blank" rel="noreferrer, noopener">
                                <input
                                    type="submit" 
                                    value="Visitar" />
                            </a>
                        </Link>
                    </ProfileButton>
                </ProfileNameBody>
            </ProfileItem>
        )
    }


    return (
        <>
            { data.map(item => RenderItem(item)) } 
        </>
    )
}


export default memo( FlatListComponent )