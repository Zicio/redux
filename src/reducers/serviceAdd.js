import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  СLEAR_SERVICE_FIELD,
} from "../actions/actionTypes";

const initialState = {
  id: null,
  name: "",
  price: "",
};

const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
      const item = action.payload;
      return { id: item.id, name: item.name, price: item.price };
    case СLEAR_SERVICE_FIELD:
      return initialState;
    default:
      return state;
  }
};

export default serviceAddReducer;
