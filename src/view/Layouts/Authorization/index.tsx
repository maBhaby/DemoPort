import {FC} from 'react'
import styles from '../styles/index.module.scss'
import { ILayout } from '../interfaces'

const Authorization:FC<ILayout> = ({children}) => {
  return (
    <section className={styles.auth}>{children}</section>
  )
}

export default Authorization