import React from 'react'
import styles from './Link.module.css'

const Link = ({text, onClick}) => {
  return (
    <p className={styles.link} onClick={onClick}>{text}</p>
  )
}

export default Link