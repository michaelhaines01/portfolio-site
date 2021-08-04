import "./aboutme.scss";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <div className="about-container">
          <h1>About me</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            ipsam aperiam! Iusto et cumque libero nemo qui, dolore ab ipsa
            quibusdam atque nobis mollitia, distinctio praesentium provident
            sequi dolorum illo? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat, ipsam aperiam! Iusto et cumque libero
            nemo qui, dolore ab ipsa quibusdam atque nobis mollitia, distinctio
            praesentium provident sequi dolorum illo? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Quaerat, ipsam aperiam! Iusto et
            cumque libero nemo qui, dolore ab ipsa quibusdam atque nobis
            mollitia, distinctio praesentium provident sequi dolorum illo?
          </p>
        </div>
        <div className="skills-container">
          <h3>Skills</h3>
          <img src="./assets/css350.png" alt="CSS" />
          <img src="./assets/django50.png" alt="" />
          <img src="./assets/git50.png" alt="" />
          <img src="./assets/html50.png" alt="" />
          <img src="./assets/javascriptlogo50.png" alt="" />
          <img src="/assets/python50.png" alt="" />
          <img src="./assets/reactnative50.png" alt="" />
          <img src="./assets/sass50.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="image-container">
          {" "}
          <div className="surf-container">
            <img src="./assets/surf.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
