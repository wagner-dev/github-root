import type { NextPage, GetServerSideProps } from 'next'
import VerifyAuth from '../services/auth/index'
import IndexComponent from '../components/index/index'
import Menu from '../global/menu/index'
import api, { AxiosResponse } from 'axios'
import { ProfileI } from '../components/index/index'
import { AuthI } from '../pages/login'

export interface PropsI {
    profile: ProfileI,
    auth?: AuthI
}

const IndexPage: NextPage<PropsI> = ({ profile, auth }) => {

  return (
      <>    
        <Menu auth={auth} />
        
        <IndexComponent 
            profile={profile}
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
      const { username } = authResult

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

          return {
              props: {
                  profile,
                  auth: authResult
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
