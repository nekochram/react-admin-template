import { legacy_createStore,applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
export default legacy_createStore(reducers,applyMiddleware(thunk))