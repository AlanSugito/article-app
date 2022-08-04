import React from 'react'
import styles from './CreateBlog.module.css'
import { Gap, Input, InputFile, TextArea } from '../../components'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.createBlog}>
        <BsFillArrowLeftCircleFill size={50} className={styles.backBtn} onClick={() => navigate('/home')}/>
        <h2>Create new articles</h2>
        <div className={styles.fieldWrapper}>
            <Input label='Headline' placeholder="Insert headline" autoFocus={true}/>
            <Gap height={30} />
            <InputFile />
            <Gap height={30} />
            <TextArea placeholder="Type article" />
 
        </div>
    </div>
  )
}

export default CreateBlog