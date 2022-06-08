import { useState } from "react";
import { useDispatch } from "react-redux";
import { addService } from "../actions/actionCreators";

const ServiceAdd = () => {
  const dispatch = useDispatch();

  const defaultForm = {
    name: "",
    price: 0,
  };

  const [form, setForm] = useState(defaultForm);

  const handleChange = ({ target: { name, value } }) => {
    if (value) {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(form.name, form.price));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={form.name} />
      <input name="price" onChange={handleChange} value={form.price} />
      <button type="submit">Save</button>
    </form>
  );
};

export default ServiceAdd;
