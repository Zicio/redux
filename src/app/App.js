import ServiceAdd from "../components/ServiceAdd";
import ServiceFilter from "../components/ServiceFilter";
import ServiceList from "../components/ServiceList";

function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </div>
  );
}

export default App;
