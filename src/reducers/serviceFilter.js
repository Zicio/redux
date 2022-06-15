import { SET_SERVICE_FILTER } from "../actions/actionTypes";

const initialState = "";

const serviceFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICE_FILTER:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default serviceFilterReducer;
