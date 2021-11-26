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

const ProfileComponent: FC = () => {
    return(
        <Body>
            <ImageProfile>
                <Image
                    width={175}
                    height={175} 
                    src="https://avatars.githubusercontent.com/u/63814295?v=4" />
            </ImageProfile>
            <Data>
                <NameBody>
                    <Name>
                        <span>wagner-dev</span>
                    </Name>
                    <LogOutButton>
                        <input
                            type="submit" 
                            value="Sair" />
                    </LogOutButton>
                </NameBody>
                <Bio>
                    <span>{"16 years. Developer fullstack. JavaScript, Typescript, React, Next, Node <3"}</span>
                </Bio>
                <Cards>
                    <Card>
                        <ValueCard>
                            <span>58</span>
                        </ValueCard>
                        <TitleCard>
                            <span>seguindo</span>
                        </TitleCard>
                    </Card>
                    <Card>
                        <ValueCard>
                            <span>45</span>
                        </ValueCard>
                        <TitleCard>
                            <span>seguidores</span>
                        </TitleCard>
                    </Card>
                    <Card>
                        <ValueCard>
                            <span>9</span>
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