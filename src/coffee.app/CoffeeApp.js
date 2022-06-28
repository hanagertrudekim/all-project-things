import "./Coffee.css";
import CoffeeList from "./CoffeeList";
import CoffeeCup from "./CoffeeCup";
import { useState } from "react";

function CoffeeApp() {
  const [coffee, setCoffee] = useState(0);
  return (
    <div className="container">
      <CoffeeCup coffee={coffee} />
      <CoffeeList setCoffee={setCoffee} coffee={coffee} />
    </div>
  );
}

export default CoffeeApp;
