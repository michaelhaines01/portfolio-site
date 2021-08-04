import "./portfolio.scss";
import { useEffect, useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PortfolioList from "../portfolioList/PortfolioList";
import { battleships, etch, memory, weather, calculator } from "../../data.js";
export default function Portfolio() {
  const [selected, setselected] = useState("calculator");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "calculator":
        setData(calculator);
        break;
      case "etch":
        setData(etch);
        break;
      case "battleships":
        setData(battleships);
        break;
      case "memory":
        setData(memory);
        break;
      case "weather":
        setData(weather);
        break;
      default:
        setData(calculator);
    }
  }, [selected]);

  const list = [
    {
      id: "calculator",
      title: "Calculator",
    },
    {
      id: "etch",
      title: "Etch o sketch",
    },
    {
      id: "memory",
      title: "Memory game",
    },
    {
      id: "weather",
      title: "Weather App",
    },
    {
      id: "battle",
      title: "Battleships",
    },
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
              <button>
                <CodeIcon />
                Code
              </button>
              <button>
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
