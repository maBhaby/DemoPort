import React, { FC } from 'react'
import { logo } from '../../assets'
import Inputs from '../Inputs'
import Button from '../Button'
import { BUTTON_THEME } from '../../utils/const'
import { FormikValues } from 'formik'

import styles from './styles/index.module.scss'

const AuthForm: FC<FormikValues> = ({ formik }) => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik
  return (
    <form onSubmit={handleSubmit} className={styles.auth_form}>
      <img
        className={styles.auth_form__img}
        src={logo}
        alt='logo'
        width={140}
        height={35}
      />
      <div className={styles.auth_form__inputs}>
        <Inputs.Text
          type='text'
          placeholder='Электронная почта'
          name='email'
          erorr={touched.email && errors.email}
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Inputs.Text
          type='password'
          placeholder='Пароль'
          name='password'
          erorr={touched.password && errors.password}
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <Button theme={BUTTON_THEME.FILL}>Войти</Button>
    </form>
  )
}

export default AuthForm
