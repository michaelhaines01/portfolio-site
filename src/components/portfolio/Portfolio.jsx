import "./portfolio.scss";
import { useEffect, useState } from "react";

import PortfolioList from "../portfolioList/PortfolioList";
import {
  battleships,
  etch,
  memory,
  weather,
  calculator,
  tictactoe,
  shoppingcart,
} from "../../data.js";
export default function Portfolio() {
  const [selected, setselected] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case 1:
        setData(battleships);
        break;
      case 2:
        setData(shoppingcart);
        break;
      case 3:
        setData(memory);
        break;
      case 4:
        setData(weather);
        break;
      case 5:
        setData(calculator);
        break;
      case 6:
        setData(etch);
        break;
      case 7:
        setData(tictactoe);
        break;
      default:
        setData(battleships);
    }
  }, [selected]);

  const list = [
    { id: 1, title: "Battleships" },
    { id: 2, title: "Shopping cart" },
    { id: 3, title: "Memory game" },
    { id: 4, title: "Weather App" },
    { id: 5, title: "Calculator" },
    { id: 6, title: "Etch o sketch" },
    { id: 7, title: "Tic tac toe" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setselected={setselected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} />
            <div className="button-container">
              <button
                onClick={() => {
                  window.open(d.link);
                }}
              >
                Code
              </button>
              <button
                onClick={() => {
                  window.open(d.live);
                }}
              >
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
