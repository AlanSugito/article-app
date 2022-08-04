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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, quos nihil odio vel ducimus reprehenderit vero corrupti mollitia perspiciatis ipsam maiores.</p>
            </div>
        </div>
   
  )
}

export default Card