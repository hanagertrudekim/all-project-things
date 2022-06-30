import CoffeeList from "./CoffeeList";
import CoffeeCup from "./CoffeeCup";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function CoffeeApp() {
  const [coffee, setCoffee] = useState(0);
  return (
    <Container>
      <CoffeeCup coffee={coffee} />
      <CoffeeList setCoffee={setCoffee} coffee={coffee} />
    </Container>
  );
}

export default CoffeeApp;
