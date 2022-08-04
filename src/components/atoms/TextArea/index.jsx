import React from 'react'
import styles from './TextArea.module.css'

const TextArea = ({...rest}) => {
  return (
    <textarea {...rest} className={styles.textArea}></textarea>
  )
}

export default TextArea