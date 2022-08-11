import React from "react";
import styles from "./Navbar.module.css";
import { Gap } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "CHANGE_IS_LOGIN", value: false });
    navigate("/login");
  };
  return (
    <nav className={styles.header}>
      <h2>Kabar kabaran</h2>
      <div
        className={styles.logout}
        onClick={logout}
        title="Back to Log in page"
      >
        <FaPowerOff size={30} />
        <Gap width={20} />
        <p className={styles.link}>Log out</p>
      </div>
    </nav>
  );
};

export default Navbar;
