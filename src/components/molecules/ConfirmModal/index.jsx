import React from "react";
import styles from "./ConfirmModal.module.css";
import { Button, Gap } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, setArticles } from "../../../config/redux/action";

const ConfirmModal = () => {
  const { articleSelected } = useSelector((state) => state.globalReducer);
  const { currentPage } = useSelector((state) => state.homeReducer.page);
  const dispatch = useDispatch();

  const cancel = () => {
    dispatch({ type: "CHANGE_IS_VISIBLE", value: false });
  };

  const confirm = () => {
    dispatch({ type: "CHANGE_IS_VISIBLE", value: false });
    deleteArticle(articleSelected);
    setArticles(currentPage);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBox}>
        <h2 className="prompt">Are you sure?</h2>
        <div className={styles.btnGroup}>
          <Button title="Yes" onClick={confirm} />
          <Gap width={30} />
          <Button title="Cancel" onClick={cancel} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
