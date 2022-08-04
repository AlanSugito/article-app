import React from 'react'
import styles from './Footer.module.css'
import {TbCopyright} from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.copyright}>
            <TbCopyright size={30}/>
            <p>Copyright - All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer