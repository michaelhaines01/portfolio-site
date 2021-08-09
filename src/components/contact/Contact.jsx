import "./contact.scss";
import { useState } from "react";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    setMessage(true);
    e.preventDefault();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="contact-container">
          <h1>You can contact me on</h1>
          <div className="section-line"></div>
        </div>
        <div className="email">
          <img src="./assets/email-64.png" alt="" />
          <h3> michaelhaines01@gmail.com</h3>
        </div>

        <div className="phone">
          <img src="./assets/phone60.png" alt="" />
          <h3>+6140304709</h3>
        </div>
        <img src="./assets/github60.png" alt="" />
      </div>
      <div className="right">
        <h1>Leave a message</h1>
        <form onSubmit={handleSubmit}>
          <input type="text " placeholder="email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Sent</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
