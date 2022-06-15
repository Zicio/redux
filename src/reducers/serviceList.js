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
      // Проверка типа операции (изменение/добавление)
      if (!item.id) {
        return [
          ...state,
          { id: uuidv4(), name: item.name, price: Number(item.price) },
        ];
      }
      return state.map((service) => {
        if (service.id === item.id) {
          service.name = item.name;
          service.price = Number(item.price);
          return service;
        }
        return service;
      });

    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    default:
      return state;
  }
};

export default serviceListReducer;
