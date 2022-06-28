import { Route, Routes, Link } from "react-router-dom";
import CoffeeApp from "./coffee.app/CoffeeApp";

const App = () => {
  return (
    <div className="App">
      <h1>MY Projects</h1>
      <h2>
        <li>
          <Link to="/coffee">Coffee APP</Link>
        </li>
      </h2>
      <Routes>
        <Route path="/coffee" element={<CoffeeApp />} />
      </Routes>
    </div>
  );
};

export default App;
