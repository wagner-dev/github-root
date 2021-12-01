import { NextApiRequest, NextApiResponse } from 'next'
import api, { AxiosResponse } from 'axios'

interface DataRequestI {
    id: number
}

const NoFollow = async (request: NextApiRequest, response: NextApiResponse) => {
    const name = request.headers.authorization

    try{
        const { data: dataFollowing }: AxiosResponse<DataRequestI[], any>= await api.get(`https://api.github.com/users/${name}/following`)
        const { data: dataFollowers }: AxiosResponse<DataRequestI[], any>= await api.get(`https://api.github.com/users/${name}/followers`)
        
        const NoFollowData = dataFollowers.filter(follower => !dataFollowing.some(follow => follow.id === follower.id))

        response.json({ message: 'ok', data: NoFollowData })
    }
    catch{
        response.status(500)
                .json({ message: 'err' })
    }
}

export default NoFollow