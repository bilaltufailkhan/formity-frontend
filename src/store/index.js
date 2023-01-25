import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // composeEnhancers(applyMiddleware(thunk))
);

export default store;
