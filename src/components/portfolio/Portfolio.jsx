import "./portfolio.scss";
import { useEffect, useState } from "react";

import PortfolioList from "../portfolioList/PortfolioList";
import {
  battleships,
  etch,
  memory,
  weather,
  inventory,
  shoppingcart,
} from "../../data.js";
export default function Portfolio() {
  const [selected, setselected] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case 1:
        setData(inventory);
        break;
      case 2:
        setData(battleships);
        break;
      case 3:
        setData(shoppingcart);
        break;
      case 4:
        setData(memory);
        break;
      case 5:
        setData(weather);
        break;
      case 6:
        setData(etch);
        break;

      default:
        setData(battleships);
    }
  }, [selected]);

  const list = [
    { id: 1, title: "Inventory" },
    { id: 2, title: "Battleships" },
    { id: 3, title: "Shopping cart" },
    { id: 4, title: "Memory game" },
    { id: 5, title: "Weather App" },
    { id: 6, title: "Etch o sketch" },
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
            <img
              className="project-image"
              src={`${process.env.PUBLIC_URL}${d.img}`}
            />
            <div className="left">
              <div className="tech-container">
                <h2>Built with</h2>
                <div className="icon-container">
                  {d.tech.map((tech) => (
                    <img
                      className="tech-icon"
                      src={`${process.env.PUBLIC_URL}${tech}`}
                      alt="tech"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="right">
              <div className="info-container">
                <h2>{d.title}</h2>
                <h3>{d.description}</h3>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
