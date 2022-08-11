import React, { useState } from "react";
import styles from "./Register.module.css";
import { Input, Button, Link, Gap } from "../../components";
import { useNavigate } from "react-router-dom";
import {register} from "../../config/redux/action/authAction";

const Register = () => {
  const [data, setData] = useState({});

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const registerHandler = () => {
    register(data);
    setData({
      username: "",
      email: "",
      password: "",
    });
  };

  const navigate = useNavigate();
  return (
    <div className={styles.register}>
      <h2 className={styles.header}>Register</h2>
      <Gap height={40} />
      <div className={styles.registerCard}>
        <Input
          label="Username"
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e) => inputHandler(e)}
          value={data.username}
        />
        <Gap height={30} />
        <Input
          label="Email"
          type="email"
          placeholder="e.g@gmail.com"
          id="email"
          onChange={(e) => inputHandler(e)}
          value={data.email}
        />
        <Gap height={30} />
        <Input
          label="Password"
          type="password"
          placeholder="e.g qk2e3e32"
          id="password"
          onChange={(e) => inputHandler(e)}
          value={data.password}
        />
        <Gap height={40} />
        <Button title="Sign Up" onClick={registerHandler} />
        <Gap height={30} />
        <Link
          text="Have an account?, Login"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Register;
