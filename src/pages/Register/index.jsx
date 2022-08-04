import React from 'react'
import styles from './Register.module.css'
import {Input, Button, Link, Gap} from '../../components'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.register}>
      <h2 className={styles.header}>Register</h2>
      <Gap height={40} />
      <div className={styles.registerCard}>
      <Input label="Username" type='text' placeholder='Username'/>
      <Gap height={30} />
      <Input label="Email" type='email' placeholder='e.g@gmail.com'/>
      <Gap height={30} />
      <Input label="Password" type='password' placeholder='e.g qk2e3e32'/>
      <Gap height={40} />
      <Button title='Sign Up' />
      <Gap height={30} />
      <Link text='Have an account?, Login' onClick={() => navigate('/login')}/>
    </div>
    </div>
    
  )
}

export default Register