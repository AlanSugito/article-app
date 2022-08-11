import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Input, Button, Link, Gap } from "../../components";
import { login } from "../../config/redux/action/authAction";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const { isLogin } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const loginHandler = () => {
    dispatch(login(data));
    if (isLogin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className={styles.login}>
      <h2 className={styles.header}>Login</h2>
      <Gap height={40} />
      <div className={styles.loginCard}>
        <Input
          label="Email"
          type="email"
          placeholder="e.g@gmail.com"
          onChange={(e) => inputHandler(e)}
          id="email"
        />
        <Gap height={30} />
        <Input
          label="Password"
          type="password"
          placeholder="e.g qk2e3e32"
          onChange={(e) => inputHandler(e)}
          id="password"
        />
        <Gap height={40} />
        <Button title="Log in" onClick={loginHandler} />
        <Gap height={30} />
        <Link
          text="Don't have an account? Sign up"
          onClick={() => navigate("/signup")}
        />
      </div>
    </div>
  );
};

export default Login;
