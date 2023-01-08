import React, { FC } from 'react'
import styles from '../styles/index.module.scss'
import classNames from 'classnames'
import { IInput } from '../interfaces'

const Text: FC<IInput> = ({
  name,
  type,
  value,
  onChange,
  label,
  erorr,
  onBlur,
  placeholder
}) => {
  return (
    <label className={styles.input__label} htmlFor={name}>
      {Boolean(label) && label}
      <input
        className={classNames({
          [styles.input__text]: true,
          [styles.input__text_error]: Boolean(erorr)
        })}
        name={name}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        id={name}
      />
      {Boolean(erorr) && <p className={styles['input__text_error-text']}>{erorr}</p>}
    </label>
  )
}

export default Text
