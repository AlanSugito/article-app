import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getArticle } from "../../config/redux/action";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import styles from "./Article.module.css";


const Article = () => {
  const params = useParams()
  const {articleId} = params

  const {article} = useSelector(state => state.articleReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle(articleId))
  }, [dispatch, articleId])

  return (
    <div className={styles.article}>
      <BsFillArrowLeftCircleFill size={50} className={styles.backBtn}/>
      <div className={styles.articleWrapper}>
        <img src={`http://localhost:5000/${article.imgSrc}`} alt="" className={styles.hero}/>
        <h2 className={styles.headline}>{article.headline}</h2>
        <p className={styles.time}>{article.postedAt}</p>
        <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quasi exercitationem. Libero repellat ex esse similique, tenetur quis quae laboriosam iure. Facilis perspiciatis tempore nam, eaque velit inventore deleniti illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam incidunt quam at repellat quos labore cupiditate quae perspiciatis reiciendis? Sint quis cumque quae facere commodi earum odio ducimus modi.
        </p>
      </div>
    </div>
  );
};

export default Article;
