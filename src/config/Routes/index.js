import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Home, Register, Login, CreateBlog, Article, MainApp } from "../../pages";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<MainApp />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createBlog" element={<CreateBlog />}></Route>
          <Route path="/createBlog/:articleId" element={<CreateBlog />}></Route>
          <Route path="/article/:articleId" element={<Article />}></Route>
        </Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
