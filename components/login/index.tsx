import { FC } from 'react'
import Menu from '../../global/menu/index'
import {
    Body
} from './styled'
import Icon from './Icon/index'
import Content from './Content/index'

const LoginComponent: FC = () => {
    return (
        <>
            <Menu />
            <Body>
                <Icon />
                <Content />
            </Body>
        </>
    )
}
export default LoginComponent