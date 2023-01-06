import React, { FC } from "react";
import styles from "../styles/index.module.scss";
import { IInput } from "../interfaces";

const Text: FC<IInput> = ({
  name,
  type,
  value,
  onChange,
  label,
  erorr,
  placeholder,
}) => {
  return (
    <label className={styles.input__label} htmlFor={name}>
      {Boolean(label) && label}
      <input
        className={styles.input__text}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        id={name}
      />
      {Boolean(erorr) && <p className={styles.input__text_error}>{erorr}</p>}
    </label>
  );
};

export default Text;
