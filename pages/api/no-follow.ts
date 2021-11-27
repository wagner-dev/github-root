import { NextApiRequest, NextApiResponse } from 'next'
import api, { AxiosResponse } from 'axios'

interface DataRequestI {
    id: number
}

const NoFollow = async (request: NextApiRequest, response: NextApiResponse) => {
    const name = "wagner-dev" //request.headers.authorization

    try{
        const { data: dataFollowing }: AxiosResponse<DataRequestI[], any>= await api.get(`https://api.github.com/users/${name}/following`)
        const { data: dataFollowers }: AxiosResponse<DataRequestI[], any>= await api.get(`https://api.github.com/users/${name}/followers`)
        
        const Find = (follow: DataRequestI, follower: DataRequestI) => follow.id === follower.id
        const NoFollowData = dataFollowers.filter(follower => dataFollowing.some(follow => !Find(follow, follower)))

        const data = {
            data: NoFollowData,
            length: NoFollowData.length
        }

        response.json({ message: 'ok', data })
    }
    catch{
        response.status(500)
                .json({ message: 'err' })
    }
}

export default NoFollow