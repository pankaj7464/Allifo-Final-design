import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";

const RootReducer = combineReducers({
  blogs: blogReducer,
});

export default RootReducer;
