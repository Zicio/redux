import { useSelector, useDispatch } from "react-redux";
import { editService, removeService } from "../actions/actionCreators";

const ServiceList = () => {
  const dispatch = useDispatch();

  let items = useSelector((state) => state.serviceList);
  const filter = useSelector((state) => state.serviceFilter);

  const filterFunction = (items) => {
    return items.filter((service) => {
      return service.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  if (filter !== "") {
    items = filterFunction(items);
  }

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
          {o.name} {o.price}{" "}
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <button onClick={() => handleEdit(o)}>✎</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
