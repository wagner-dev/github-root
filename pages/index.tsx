import type { NextPage, GetServerSideProps } from 'next'
import VerifyAuth from '../services/auth/index'
import IndexComponent from '../components/index/index'
import Menu from '../global/menu/index'
import api, { AxiosResponse } from 'axios'
import { getCookie } from '../services/persist/index'
import { ProfileI } from '../components/index/index'
import { MetaI } from '../components/index'

export interface PropsI {
    profile: ProfileI,
    unfollowers: MetaI
    no_follow: MetaI
}

const IndexPage: NextPage<PropsI> = ({ profile, unfollowers, no_follow }) => {

  return (
      <>    
        <Menu />
        <IndexComponent 
            profile={profile}
            unfollowers={unfollowers}
            no_follow={no_follow}
        />
      </>
  )

}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authResult = VerifyAuth({ ctx })

  const redirectDefault = {
      redirect: {
          destination: '/login',
          permanent: false
      }
  }

  if(!authResult.auth){
      return redirectDefault
  }

  try{
      const username = getCookie({ ctx, name: 'username_github_root'})

      if(username){
          const url = `https://api.github.com/users/${username}`
          const { data: { 
                    avatar_url,
                    name,
                    bio,
                    followers,
                    following,
                    public_repos 
                } }: AxiosResponse<ProfileI, any> = await api.get(url)
          
          const profile = {
              avatar_url,
              name,
              bio,
              followers,
              following,
              public_repos
          }
          const { data: unfollowers  } = await api.get(`${ process.env.HOST || "localhost:3000" }/unfollowers`, { headers: { Authorization: username } })
          const { data: no_follow } = await api.get(`${ process.env.HOST || "localhost:3000" }/no-follow`, { headers: { Authorization: username } })
          
          return {
              props: {
                  profile,
                  unfollowers,
                  no_follow
              }
          }
      }
      else 
          return redirectDefault

  }
  catch{
      return redirectDefault
  }

}


export default IndexPage
