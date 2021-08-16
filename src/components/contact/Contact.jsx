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
            <img src="./assets/email-64.png" alt="" />
            <h3> michaelhaines01@gmail.com</h3>
          </div>

          <div className="phone">
            <img src="./assets/phone60.png" alt="" />
            <h3>+6140304709</h3>
          </div>
          <div className="github">
            <a href="https://github.com/michaelhaines01">
              <img src="./assets/github60.png" alt="" />
            </a>
            <h3>Github</h3>
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
