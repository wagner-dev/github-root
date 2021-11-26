import type { NextPage, GetServerSideProps } from 'next'
import VerifyAuth from '../services/auth/index'
import IndexComponent from '../components/index/index'
import Menu from '../global/menu/index'
import api, { AxiosResponse } from 'axios'
import { getCookie } from '../services/persist/index'
import { ProfileI } from '../components/index/index'

export interface PropsI {
    profile: ProfileI
}

const IndexPage: NextPage<PropsI> = ({ profile }) => {

  return (
      <>    
        <Menu />
        <IndexComponent profile={profile} />
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
          
          return {
              props: {
                  profile
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
