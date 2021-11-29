import { FC } from 'react'
import {
    Body
} from './styled'
import Icon from './Icon/index'
import Content from './Content/index'

const LoginComponent: FC = () => {
    return (
        <>
            <Body>
                <Icon />
                <Content />
            </Body>
        </>
    )
}
export default LoginComponent