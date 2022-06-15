import { combineReducers, legacy_createStore as createStore } from "redux";
import serviceAddReducer from "../reducers/serviceAdd";
import serviceFilterReducer from "../reducers/serviceFilter";
import serviceListReducer from "../reducers/serviceList";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceFilter: serviceFilterReducer,
});

const store = createStore(reducer);

export default store;
