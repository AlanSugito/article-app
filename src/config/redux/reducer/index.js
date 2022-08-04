import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import homeReducer from "./homePageReducer";
import articleReducer from "./articleReducer";

const reducer = combineReducers({homeReducer, globalReducer, articleReducer})

export default reducer