import { combineReducers } from "redux";
import topicReducer from "./topicReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  topicReducer,
  errorReducer,
  authReducer
});
