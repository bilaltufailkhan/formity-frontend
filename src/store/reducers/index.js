// Root Reducer

import { combineReducers } from "redux";
import auth from "./auth";

export let rootReducer = combineReducers({
  authUser: auth,
});

export default rootReducer;
