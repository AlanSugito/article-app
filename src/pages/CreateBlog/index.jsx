import React, { useEffect } from "react";
import styles from "./CreateBlog.module.css";
import { Button, Gap, Input, InputFile, TextArea } from "../../components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  postArticle,
  setForm,
  setImgPreview,
  updateArticle,
} from "../../config/redux/action";
import { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const articleId = params.articleId;
  
  const dispatch = useDispatch();

  const [headingName, setHeadingName] = useState("Create new articles");

  useEffect(() => {
    if (articleId) {
      setHeadingName("Edit Article");
      axios.get(`http://localhost:5000/v1/posts/article/${articleId}`)
      .then((res) => {
        const {data} = res.data 
        dispatch(setImgPreview(`http://localhost:5000/${data.imgSrc}`))
        dispatch(setForm("headline", data.headline));
        dispatch(setForm("content", data.content));
        dispatch(setForm("imgSrc", data.imgSrc))
      })
   }
  }, [dispatch, articleId]);

  const { form, imgPrev } = useSelector((state) => state.createArticleReducer);
  const { headline, content } = form;

  const setFormHandler = (e, type) => {
    dispatch(setForm(type, e.target.value));
  };

  const setImgPrev = (e) => {
      const file = e.target.files[0];
        dispatch(setForm("imgSrc", file));
        dispatch(setImgPreview(URL.createObjectURL(file)));

  };

  const onSubmit = () => {
    if (articleId) {
      updateArticle(form, articleId);
    } else {
      postArticle(form);
      dispatch(setForm("headline", ""));
      dispatch(setForm("imgSrc", null));
      dispatch(setForm("content", ""));
    }
  };
  return (
    <div className={styles.createBlog}>
      <BsFillArrowLeftCircleFill
        size={50}
        className={styles.backBtn}
        onClick={() => navigate("/")}
      />
      <h2>{headingName}</h2>
      <div className={styles.fieldWrapper}>
        <Input
          label="Headline"
          placeholder="Insert headline"
          autoFocus={true}
          value={headline}
          onChange={(e) => setFormHandler(e, "headline")}
        />
        <Gap height={30} />
        <InputFile img={imgPrev} onChange={(e) => setImgPrev(e)}/>
        <Gap height={30} />
        <TextArea
          placeholder="Type article"
          onChange={(e) => setFormHandler(e, "content")}
          value={content}
        />
      </div>
      <Gap height={30} />
      <Button title="Save" onClick={onSubmit} />
    </div>
  );
};

export default CreateBlog;
