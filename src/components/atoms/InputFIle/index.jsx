import React from 'react'
import styles from './InputFile.module.css'
import Gap from '../Gap'

const InputFile = ({img, ...rest}) => {
  return (
    <div className={styles.inputWrapper}>
        {img && <img src={img} alt="preview" className={styles.imgPreview}/>}
        <Gap height={20} />
        <input type="file" className={styles.fileInput} {...rest} required={true}/>
    </div>
  )
}

export default InputFile