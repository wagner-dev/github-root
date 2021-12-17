import { FC, useState, ChangeEventHandler, KeyboardEventHandler } from 'react'
import {
    Body,
    Form,
    Title,
    InputText,
    SubmitButton,
    Description
} from './styled'
import { persistCookie } from '../../../services/persist/index'
import { useRouter } from 'next/router'

const ContentComponent: FC = () => {

    const { query: { back: backLinkParams }, push } = useRouter()

    const [name, setName] = useState('')

    const ChangeName: ChangeEventHandler<HTMLInputElement> = 
    ({ target: { value } }) => {
        const nameValid = value.replace(/[^A-Z0-9-._]/img, '')
        
        setName( nameValid )
    }

    const SignIn = () => {

        if(name) {

            const data = {
                ctx: null,
                name: "username_github_root",
                data: name
            }

            const persistentResult = persistCookie(data)
            
            const backLink = backLinkParams
            ? `/${backLinkParams}`
            : '/'

            if(persistentResult) push( backLink ) 
        }
    }

    const SignInWithEnter: KeyboardEventHandler<HTMLInputElement> = ({ keyCode }) => {
        if(keyCode === 13) SignIn()
    }

    return (
        <Body>
            <Description>
                <span>
                    Tenha acesso às pessoas que não te seguem de volta e pessoas que você não segue de volta no github.
                </span>
            </Description>
            <Form>
                <Title>
                    <h2>Entrar</h2>
                </Title>
                <InputText>
                    <input
                        placeholder="Seu nome de login no github" 
                        value={name}
                        onChange={ChangeName}
                        onKeyDown={SignInWithEnter}
                    />
                </InputText>
                <SubmitButton>
                    <input 
                        type="submit"
                        value="Entrar"
                        onClick={SignIn}
                    />
                </SubmitButton>
            </Form>
        </Body>
    )
}


export default ContentComponent