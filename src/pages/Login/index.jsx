import React from 'react'
import styles from './Login.module.css'
import {useNavigate} from 'react-router-dom'
import { Input, Button, Link, Gap } from '../../components'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.login}>
      <h2 className={styles.header}>Login</h2>
      <Gap height={40} />
      <div className={styles.loginCard}>
      <Input label="Email" type='email' placeholder='e.g@gmail.com'/>
      <Gap height={30} />
      <Input label="Password" type='password' placeholder='e.g qk2e3e32'/>
      <Gap height={40} />
      <Button title='Log in' onClick={() => navigate('/home')}/>
      <Gap height={30} />
      <Link text="Don't have an account? Sign up" onClick={() => navigate('/signup')}/>
    </div>
    </div>
    
  )
}

export default Login