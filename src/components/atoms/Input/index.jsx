import React from 'react'
import styles from './Input.module.css'

const Input = ({type, label, ...rest}) => {
  return (
    <div className={styles.inputField}>
        <p className={styles.label}>{label}</p>
        <input className={styles.input} type={type} {...rest} />
    </div>
  )
}

export default Input