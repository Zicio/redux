import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  СLEAR_SERVICE_FIELD,
  SET_SERVICE_FILTER,
} from "./actionTypes";

export function addService(item) {
  return { type: ADD_SERVICE, payload: item };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function editService(item) {
  return { type: EDIT_SERVICE, payload: item };
}

export function clearServiceField() {
  return { type: СLEAR_SERVICE_FIELD, payload: null };
}

export function setServiceFilter(filter) {
  return { type: SET_SERVICE_FILTER, payload: filter };
}
