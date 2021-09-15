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
      strings: ["Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <Particles
          className="particles"
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
        />
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi there, i'm</h2>
          <h1>Michael Haines</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="downarrow">
            <a href="#aboutme">
              <img src={`${process.env.PUBLIC_URL}/assets/down-arrow.png`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
