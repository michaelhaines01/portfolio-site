import "./aboutme.scss";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <div className="about-container">
          <h1>About me</h1>
          <p>
            A former electrician and telecommunication technician, I left that
            field in search of something I am passionate about and that
            challenges me. 6 years of travelling and starting surfboard over 40
            countries later, I arrived back in Australia in March 2020 and set
            out on my quest to learn computer science. I quickly fell in love
            with programming. A perfect mix of tech, logical problem solving and
            creativity. That is why more than a year later, I am still on my
            learning journey, and I now feel, I am ready to share my skills with
            world! I enjoy spending the rest of my time enjoying life on the
            Peninsula, surfing, scuba diving and riding my motorbike.
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
          <img src="./assets/surf-image.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
