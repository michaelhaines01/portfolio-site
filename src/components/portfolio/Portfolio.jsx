import "./portfolio.scss";
import { useEffect, useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  battleships,
  etch,
  memory,
  weather,
  calculator,
  tictactoe,
  library,
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
        setData(etch);
        break;
      case 3:
        setData(calculator);
        break;
      case 4:
        setData(memory);
        break;
      case 5:
        setData(weather);
        break;
      case 6:
        setData(tictactoe);
        break;
      case 7:
        setData(library);
        break;
      default:
        setData(calculator);
    }
  }, [selected]);

  const list = [
    { id: 1, title: "Battleships" },
    { id: 2, title: "Etch o sketch" },
    { id: 3, title: "Calculator" },
    { id: 4, title: "Memory game" },
    { id: 5, title: "Weather App" },
    { id: 6, title: "Tic tac toe" },
    { id: 7, title: "Library" },
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
                  window.open.href(d.link);
                }}
              >
                <CodeIcon />
                Code
              </button>
              <button
                onClick={() => {
                  window.open.href(d.live);
                }}
              >
                <VisibilityIcon />
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
