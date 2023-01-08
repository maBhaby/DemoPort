import { FC } from 'react'
import Layouts from '../view/Layouts'
import Header from '../view/Header'

const Main: FC = () => {
  return (
    <>
      <Header />
      <Layouts.Main />
    </>
  )
}

export default Main
