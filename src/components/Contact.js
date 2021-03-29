import React from "react";
import "./contact.css";

const name = "Toto";

const avatar =
  "https://cdn.pixabay.com/photo/2016/08/24/10/07/terrier-1616611_960_720.jpg";

const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />
      <div>
        <h3 className="name">{name}</h3>
        <div class="status">
          <div class="status-online"></div>
          <p class="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;