import React from 'react'
import { logo } from '../../assets'
import { NavLink, Link } from 'react-router-dom'
import { ROUTS } from '../../utils/const'
import classNames from 'classnames'
import styles from './styles/index.module.scss'

const links = [
  {
    id:1,
    title: 'Классификатор услуг',
    rout: ROUTS.MAIN.INDEX
  },
  {
    id:2,
    title: 'Архив услуг',
    rout: ROUTS.MAIN.ARHIVE
  },
  {
    id:3,
    title: 'Пользователи',
    rout: ROUTS.MAIN.USERS
  },
  {
    id:4,
    title: 'Администрирование',
    rout: ROUTS.MAIN.ADMIN
  },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Link to={ROUTS.MAIN.INDEX}>
          <img className={styles.header__img} src={logo} alt="logo" width='103' height='30'/>
        </Link>
        <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>
              {links.map(({id, rout, title}) => (
                <li className={styles.header__nav_item} key={id}>
                  <NavLink className={({isActive}) => classNames({
                    [styles.header__nav_link]:true,
                    [styles['header__nav_link--active']]: isActive,
                  })} 
                    to={rout}>
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
        </nav>
      </div>
      <div>sdas</div>
    </header>
  )
}

export default Header