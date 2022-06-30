import small_coffee from "./assets/small_coffee.webp";
import medium_coffee from "./assets/medium_coffee.jpg";
import large_coffee from "./assets/large_coffee.png";
import styled from "styled-components";

const Contents = styled.div`
  display: flex;
  border: 2px solid black;
  margin-left: 50px;
  margin-top: 50px;
  height: 400px;
  width: 300px;
  align-items: center;
  justify-content: space-around;
`;

const Small = styled.div`
  height: 50px;
  width: 50px;
`;
const Medium = styled.div`
  height: auto;
  width: 100px;
  margin-top: 15px;
`;

const Large = styled.div`
  height: 220px;
  width: 120px;
`;

const CoffeeImg = styled.img`
  width: ${(props) => (props.width ? props.width : "50px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  margin-top: ${(props) => (props.medium ? "15px" : "0")};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function CoffeeList({ setCoffee, coffee }) {
  const clickCoffee = (size) => {
    if (coffee + size > 300) {
      return;
    }
    setCoffee((prev) => prev + size);
  };
  return (
    <Contents>
      <div>
        <Small onClick={() => clickCoffee(30)}>
          <CoffeeImg src={small_coffee} alt="can coffee" />
        </Small>
        <Medium onClick={() => clickCoffee(50)}>
          <CoffeeImg
            width="100px"
            height="auto"
            medium
            src={medium_coffee}
            alt="snoopy"
          />
        </Medium>
      </div>
      <Large onClick={() => clickCoffee(70)}>
        <CoffeeImg
          width="120px"
          height="220px"
          src={large_coffee}
          alt="big coffee"
        />
      </Large>
    </Contents>
  );
}
