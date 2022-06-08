import { ADD_SERVICE, REMOVE_SERVICE } from "../actions/actionTypes";
const { v4: uuidv4 } = require("uuid");

const initialState = [
  { id: uuidv4(), name: "Замена стекла", price: 21000 },
  { id: uuidv4(), name: "Замена дисплея", price: 25000 },
];

const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      const item = action.payload;
      if (!item.id) {
        return [
          ...state,
          { id: uuidv4(), name: item.name, price: Number(item.price) },
        ];
      } else {
        const newState = state;
        const coincidence = newState.findIndex((el) => el.id === item.id);
        newState[coincidence].name = item.name;
        newState[coincidence].price = Number(item.price);
        // state[coincidence] = {
        //   id: item.id,
        //   name: item.name,
        //   price: Number(item.price),
        // };
        // const newState = state.splice(coincidence, 1, {
        //   id: item.id,
        //   name: item.name,
        //   price: Number(item.price),
        // });
        return newState;
      }
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    default:
      return state;
  }
};

export default serviceListReducer;
