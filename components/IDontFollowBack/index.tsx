import { FC } from 'react'
import {
    Body,
    Title,
    DataList,
} from './styled'
import { PropsI } from '../../pages/unfollowers'

import FlatList from './FlatList/index'
import Empty from './Empty/index'

const IDontFollowBackComponent: FC<PropsI> = ({ data }) => {

    return (
        <>  

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


export default IDontFollowBackComponent