import styled from "styled-components";

const Box = styled.div`
  border: 2px solid black;
  height: 300px;
  width: 150px;
  margin-left: 50px;
  margin-top: 100px;
  display: flex;
  align-items: flex-end;
`;

const CoffeeMount = styled.div`
  width: 100%;
  background-color: rgba(165, 106, 42, 0.754);
  height: ${(props) => props.height + "px"};
`;

export default function CoffeeCup({ coffee }) {
  return (
    <Box>
      <CoffeeMount height={coffee}></CoffeeMount>
    </Box>
  );
}
