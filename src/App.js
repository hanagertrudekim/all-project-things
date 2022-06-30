import { Route, Routes, Link } from "react-router-dom";
import CoffeeApp from "./coffee.app/CoffeeApp";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/coffee" element={<CoffeeApp />} />
      </Routes>
    </div>
  );
};

export default App;
