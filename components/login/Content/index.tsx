import { FC } from 'react'
import {
    Body,
    Form,
    Title,
    InputText,
    SubmitButton
} from './styled'

const ContentComponent: FC = () => {
    return (
        <Body>
            <Form>
                <Title>
                    <h2>Entrar</h2>
                </Title>
                <InputText>
                    <input
                        placeholder="Seu nome de login no github" 
                    />
                </InputText>
                <SubmitButton>
                    <input 
                        type="submit"
                        value="Entrar"
                    />
                </SubmitButton>
            </Form>
        </Body>
    )
}


export default ContentComponent