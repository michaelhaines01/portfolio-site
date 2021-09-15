import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_2ms3kvj",
        "template_lvf25n5",
        e.target,
        "user_cFzYbE09xtS8g31CTIIxF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="contact-container">
          <h1>You can contact me on</h1>
          <div className="section-line"></div>
        </div>
        <div className="types-container">
          <div className="email">
            <img
              src={`${process.env.PUBLIC_URL}/assets/email-64.png`}
              alt="email"
            />
            <h3> michaelhaines01@gmail.com</h3>
          </div>

          <div className="phone">
            <img
              src={`${process.env.PUBLIC_URL}/assets/phone60.png`}
              alt="phone"
            />
            <h3>0491684657</h3>
          </div>
          <div className="github">
            <a
              onClick={() => {
                window.open("https://github.com/michaelhaines01");
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/github60.png`}
                alt="github"
              />
            </a>
            <h3>Github</h3>
          </div>
          <div className="resume">
            <a
              onClick={() => {
                window.open("./assets/documents/Michael_Haines_Resume.PDF");
              }}
            >
              <img src={`${process.env.PUBLIC_URL}/assets/cv-64.png`} alt="" />
            </a>
            <h3>Resume</h3>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>Leave a message</h1>
        <form onSubmit={handleSubmit}>
          <input type="text " placeholder="Name" name="name" />
          <input type="text " placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Sent</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
