import React, { useEffect, useState } from "react";
import { Button, Card, Gap } from "../../components";
import { useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {setArticles} from "../../config/redux/action";
import styles from "./Home.module.css";
import vector from '../../assets/Empty-pana.svg'

const Home = () => {
  const { articles, page } = useSelector((state) => state.homeReducer)
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    dispatch(setArticles(counter));
  }, [dispatch, counter, articles]);

  const navigate = useNavigate();

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const previous = () => {
    setCounter(page.currentPage <= 1 ? 1 : counter - 1);
  };

  const deleteArticle = (e, id) => {
    e.stopPropagation();
    dispatch({type: "CHANGE_IS_VISIBLE", value: true})
    dispatch({type: "CHANGE_ARTICLE_SELECTED", value: id})

  }

  const editArticle = (e, articleId) => {
    e.stopPropagation()
    navigate(`/createBlog/${articleId}`)
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>Recent Articles</h1>
        <div className={styles.cardContainer}>
          {articles.length !== 0 ? (
            articles?.map((article) => (
              <Card
                key={article._id}
                onClick={() => navigate(`/article/${article._id}`)}
                headline={article.headline}
                img={`http://localhost:5000/${article.imgSrc}`}
                postedAt={article.postedAt}
                content={article.content}
                onDelete={(e) => deleteArticle(e, article._id)}
                onEdit={(e) => editArticle(e, article._id)}
              />
            ))
          ) : (
            <div className="notFound">
              <h2>Oops! there are still not any articles yet.</h2>
              <img src={vector} alt="illustration" />
            </div>
          )}
        </div>
        <div className={styles.btnGroup}>
          <Button title="Previous" onClick={previous} />
          <Gap width={30} />
          <Button title="Next" onClick={next} />
        </div>
        <Gap height={30} />
      </div>
      <BsFillPlusCircleFill
        size={70}
        className={styles.createBtn}
        onClick={() => navigate("/createBlog")}
      />
    </div>
  );
};

export default Home;
