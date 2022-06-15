import { useSelector, useDispatch } from "react-redux";
import {
  addService,
  changeServiceField,
  clearServiceField,
} from "../actions/actionCreators";

const ServiceAdd = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.serviceAdd);

  const handleChange = ({ target: { name, value } }) => {
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item));
    dispatch(clearServiceField());
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(clearServiceField());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      {item.id !== null && (
        <button type="submit" onClick={handleClick}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ServiceAdd;
