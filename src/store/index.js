import { combineReducers, legacy_createStore as createStore } from "redux";
import serviceAddReducer from "../reducers/serviceAdd";
import serviceListReducer from "../reducers/serviceList";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const store = createStore(reducer);

export default store;
