import "./intro.scss";
import { init } from "ityped";
import Particles from "react-particles-js";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <Particles
            params={{
              particles: {
                number: {
                  value: 50,
                },
                size: {
                  value: 5,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
            height="90vh"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, i'm</h2>
          <h1>Michael Haines</h1>
          <h3>
            Web <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="./assets/down.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
