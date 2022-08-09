import auth from './auth'
import bookmark from './bookmark'
import folder from './folder'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth,
  bookmark,
  folder
});
export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;