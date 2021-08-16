import "./aboutme.scss";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <div className="about-container">
          <h1>About me</h1>
          <p>
            Former traveler that was addicted to new experiences and learning 6
            years and over 40 countries later. I arrived back in Australia I set
            on my quest to learn programming. Intent on not going back to my
            former job of being an electricain. I quickly fell in love with
            coding. Well over a year later still on my learning journey.I am
            ready to contribute and share my new skills with the world . Web
            development allows me to express my creativity in an satisfying way,
            to create with clear structure and to focus in on details in a way
            I've never been able to do before. It gives you the power to create
            anything with no skill ceiling and only limited by imagaination. In
            my time away from learning coding, I love too surf scuba dive and
            ride my motorbike.
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
          <img src="./assets/surf.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
