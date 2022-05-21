import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
// const composeEnherces = compoceFunc(applyMiddleware(thunk))

const store = createStore(rootReducer(),initialState, applyMiddleware(thunk));

export default store;