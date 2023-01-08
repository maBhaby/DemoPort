import React, { FC } from 'react'
import styles from './styles/index.module.scss'
import classNames from 'classnames'

interface IButton {
  theme: string
  children: string
  icon?: string
}

const Button: FC<IButton> = ({ theme, children, icon }) => {
  return (
    <button className={classNames({
      [styles.button]: true,
      [styles[theme]]: Boolean(theme)
    })}
    >
      {Boolean(icon) && <img src='icon' alt='button icon' height='18' width='18' />}
      {children}
    </button>
  )
}

export default Button
