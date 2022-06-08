import { combineReducers, legacy_createStore as createStore } from "redux";
import serviceListReducer from "../reducers/serviceList";

const reducer = combineReducers({
  serviceList: serviceListReducer,
});

const store = createStore(reducer);

export default store;
