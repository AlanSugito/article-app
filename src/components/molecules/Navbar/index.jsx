import React from 'react'
import styles from './Navbar.module.css'
import { Gap } from '../../atoms'
import {useNavigate} from 'react-router-dom'
import {FaPowerOff} from 'react-icons/fa'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav className={styles.header}>
        <h2>Kabar kabaran</h2>
        <div className={styles.logout} onClick={() => navigate('/login')} title='Back to Log in page'>
            <FaPowerOff size={30}/>
            <Gap width={20} />
            <p className={styles.link}>Log out</p>
        </div>
    </nav>
  )
}

export default Navbar