import { combineReducers } from "redux";
import itemReducer from "./itemReducers";
import errorReducer from "./errorReducers";
import authReducer from "./authReducers";

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
});
