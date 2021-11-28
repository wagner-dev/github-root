import { FC } from 'react'
import {
    Body,
    Title,
    DataList,
} from './styled'
import { PropsI } from '../../pages/unfollowers'

import Menu from '../../global/menu/index'
import FlatList from './FlatList/index'
import Empty from './Empty/index'

const NoFollowComponent: FC<PropsI> = ({ data }) => {

    return (
        <>  
            <Menu />

            <Body>
                <Title>
                    <h2>Usuários que eu não sigo de volta</h2>
                </Title>
                <DataList fix={data.length ? false : true} >

                { data.length 
                    ? <FlatList data={data} />
                    : <Empty /> 
                }

                </DataList>
            </Body>
        </>
    )
}


export default NoFollowComponent