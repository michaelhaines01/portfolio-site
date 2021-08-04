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
        <div>
          {" "}
          <h1>You can contact me on</h1>
          <div className="section-line"></div>
        </div>

        <h2> Email: michaelhaines01@gmail.com</h2>
        <h2>Phone number 040304709</h2>
        <h3>github</h3>
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
