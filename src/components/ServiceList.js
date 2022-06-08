import { useSelector, useDispatch } from "react-redux";
import {
  editService,
  removeService,
  changeServiceField,
} from "../actions/actionCreators";

const ServiceList = () => {
  const items = useSelector((state) => state.serviceList);
  console.log(items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (o) => {
    dispatch(editService(o));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <button onClick={() => handleEdit(o)}>✎</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
