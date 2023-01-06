import {FC} from 'react'
import styles from '../styles/index.module.scss'
import { ILayout } from '../interfaces'

const Authorization:FC<ILayout> = ({children}) => {
  return (
    <main>
      <section className={styles.auth}>{children}</section>
    </main>
  )
}

export default Authorization