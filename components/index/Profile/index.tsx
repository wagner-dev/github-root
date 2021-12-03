import { FC } from 'react'
import {
    Body,
    ImageProfile,
    Data,
    NameBody,
    Name,
    LogOutButton,
    Bio,
    Cards,
    Card,
    TitleCard,
    ValueCard
} from './styled'
import Image from 'next/image'
import { deleteCookie } from '../../../services/persist/index'
import { useRouter } from 'next/router'
import { ProfileI } from '../index'

interface PropsI {
    profile: ProfileI
}

const ProfileComponent: FC<PropsI> = ({ profile }) => {
    const {  
            avatar_url,
            name,
            bio,
            followers,
            following,
            public_repos } = profile

    const { push } = useRouter()

    const LogOut = () => {
        const options = {
            ctx: null,
            nameForm: "username_github_root"
        }
        deleteCookie(options)

        push('/login')
    }

    return(
        <Body>
            <ImageProfile>
                <Image
                    width={175}
                    height={175} 
                    alt="Profile image"
                    src={avatar_url} />
            </ImageProfile>
            <Data>
                <NameBody>
                    <Name>
                        <span>{name}</span>
                    </Name>
                    <LogOutButton>
                        <input
                            onClick={LogOut}
                            type="submit" 
                            value="Sair" />
                    </LogOutButton>
                </NameBody>
                <Bio>
                    <span>{bio}</span>
                </Bio>
                <Cards>
                    <Card>
                        <ValueCard>
                            <span>{following}</span>
                        </ValueCard>
                        <TitleCard>
                            <span>seguindo</span>
                        </TitleCard>
                    </Card>
                    <Card>
                        <ValueCard>
                            <span>{followers}</span>
                        </ValueCard>
                        <TitleCard>
                            <span>seguidores</span>
                        </TitleCard>
                    </Card>
                    <Card>
                        <ValueCard>
                            <span>{public_repos}</span>
                        </ValueCard>
                        <TitleCard>
                            <span>repositórios</span>
                        </TitleCard>
                    </Card>
                </Cards>
            </Data>
        </Body>
    )
}

export default ProfileComponent