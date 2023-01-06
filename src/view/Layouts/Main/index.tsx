import React, {FC} from 'react'
import styles from '../styles/index.module.scss'
import { Outlet } from 'react-router-dom'

const Main:FC= () => {
  return (
    <main className={styles.main}>
        <Outlet/>
    </main>
  )
}

export default Main