import { FC } from 'react'
import Layouts from '../view/Layouts'
import Auth from '../components/Auth'

const Authorization:FC = () => {
  return (
    <Layouts.Authorization>
        <Auth/>
    </Layouts.Authorization>
  )
}

export default Authorization