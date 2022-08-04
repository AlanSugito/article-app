import React from 'react'
import styles from './InputFile.module.css'
import dummyImg from '../../../assets/clement-helardot-95YRwf6CNw8-unsplash.jpg'
import Gap from '../Gap'

const InputFile = () => {
  return (
    <div className={styles.inputWrapper}>
        <img src={dummyImg} alt="preview" className={styles.imgPreview}/>
        <Gap height={20} />
        <input type="file" className={styles.fileInput}/>
    </div>
  )
}

export default InputFile