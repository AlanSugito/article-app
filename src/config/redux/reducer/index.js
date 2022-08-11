import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import homeReducer from "./homePageReducer";
import articleReducer from "./articleReducer";
import createArticleReducer from "./createArticleReducer";

const reducer = combineReducers({
  homeReducer,
  globalReducer,
  articleReducer,
  createArticleReducer,
});

export default reducer;
