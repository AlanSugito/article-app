import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getArticle } from "../../config/redux/action";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import styles from "./Article.module.css";


const Article = () => {
  const navigate = useNavigate()
  const params = useParams()
  const {articleId} = params

  const {article} = useSelector(state => state.articleReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle(articleId))
  }, [dispatch, articleId])

  return (
    <div className={styles.article}>
      <BsFillArrowLeftCircleFill size={50} className={styles.backBtn} onClick={() => navigate('/')}/>
      <div className={styles.articleWrapper}>
        <img src={`http://localhost:5000/${article.imgSrc}`} alt="" className={styles.hero}/>
        <h2 className={styles.headline}>{article.headline}</h2>
        <p className={styles.time}>{article.postedAt}</p>
        <p className={styles.content}>
           {article.content}
        </p>
      </div>
    </div>
  );
};

export default Article;
