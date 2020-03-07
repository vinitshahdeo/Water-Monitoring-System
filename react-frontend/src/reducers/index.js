import { combineReducers } from "redux";
import tankReducer from "./tankReducer";

export default combineReducers({
  tanks: tankReducer
});
