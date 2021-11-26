import type { NextPage, GetServerSideProps } from 'next'
import VerifyAuth from '../services/auth/index'
import IndexComponent from '../components/index/index'
import Menu from '../global/menu/index'

const IndexPage: NextPage = () => {

  return (
      <>    
        <Menu />
        <IndexComponent />
      </>
  )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authResult = VerifyAuth({ ctx })

  if(!authResult.auth){
      return {
          redirect: {
              destination: '/login',
              permanent: false
          }
      }
  }

  return {
      props: {
          auth: authResult
      }
  }

}


export default IndexPage
