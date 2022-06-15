import { useSelector, useDispatch } from "react-redux";
import { setServiceFilter } from "../actions/actionCreators";

const ServiceFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.serviceFilter);

  const handleChange = ({ target: { value } }) => {
    dispatch(setServiceFilter(value));
  };

  return (
    <form className="filter">
      <label htmlFor="filter">Фильтр</label>
      <input type="text" id="filter" onChange={handleChange} value={filter} />
    </form>
  );
};

export default ServiceFilter;
