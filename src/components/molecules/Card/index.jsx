import React from 'react'
import styles from './Card.module.css'


const Card = (props) => {
  
  const {headline, img, onClick, postedAt} = props

  return (
        <div className={styles.card} onClick={onClick}>
            <img src={img} alt="thumb" className={styles.thumb}/>
            <div className={styles.text}>
                <h3 className={styles.headline}>{headline}</h3>
                <p className={styles.time}>{postedAt}</p>
                <p>{props.content}</p>
            </div>
            <div className={styles.btnGroup}>
              <p className={styles.edit} onClick={props.onEdit}>Edit</p>
              <p className={styles.delete} onClick={props.onDelete}>Delete</p>
            </div>
        </div>
   
  )
}

export default Card