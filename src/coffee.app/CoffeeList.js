import small_coffee from "./assets/small_coffee.webp";
import medium_coffee from "./assets/medium_coffee.jpg";
import large_coffee from "./assets/large_coffee.png";

export default function CoffeeList({ setCoffee, coffee }) {
  const clickCoffee = (size) => {
    if (coffee + size > 300) {
      return;
    }
    setCoffee((prev) => prev + size);
  };
  return (
    <div className="contents">
      <div>
        <div className="small" onClick={() => clickCoffee(30)}>
          <img className="small" src={small_coffee} alt="can coffee" />
        </div>
        <div className="medium" onClick={() => clickCoffee(50)}>
          <img className="medium" src={medium_coffee} alt="snoopy" />
        </div>
      </div>
      <div className="large" onClick={() => clickCoffee(70)}>
        <img className="large" src={large_coffee} alt="big coffee" />
      </div>
    </div>
  );
}
