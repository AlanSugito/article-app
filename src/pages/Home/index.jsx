import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import { Button, Card, Gap} from "../../components";
import {useNavigate} from 'react-router-dom' 
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { useSelector, useDispatch } from "react-redux/es/exports";
import setArticles from "../../config/redux/action"


const Home = () => {
  const {articles, page} = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(1)

  useEffect(() => {
       dispatch(setArticles(counter))
  }, [dispatch, counter])

  const navigate = useNavigate()

  const next = () => {
    setCounter(counter === page.totalPage? page.totalPage : counter + 1)
  }

  const previous = () => {
    setCounter(page.currentPage <= 1? 1 : counter - 1)
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>Recent Articles</h1>
        <div className={styles.cardContainer}>
          
          {articles? articles.map(article => (
            
          <Card key={article._id}
          onClick={() => navigate(`/article/${article._id}`)}
          headline={article.headline}
          img={`http://localhost:5000/${article.imgSrc}`
        }
        postedAt={article.postedAt}
          />
          )) : <h2>There's no any posted article yet.</h2>}
        
        </div>
        <div className={styles.btnGroup}>
          <Button title="Previous" onClick={previous}/>
          <Gap width={30} />
          <Button title="Next" onClick={next}/>
        </div>
        <Gap height={30} />
      </div>
      <BsFillPlusCircleFill size={70} className={styles.createBtn} onClick={() => navigate('/createBlog')}/>
    </div>
  );
};

export default Home;
