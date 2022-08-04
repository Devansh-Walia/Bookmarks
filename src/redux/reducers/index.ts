import auth from './auth'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth,
});
export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;