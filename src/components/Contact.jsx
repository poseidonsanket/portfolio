import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div id="section5">
      <div className="contact-heading">
        <h1>Contact</h1>
      </div>
      <div className="contact-s-1">
        <p style={{ color: "#2d2e32", fontSize: "2rem" }}>
          Don't be shy! Hit me up! 👇
        </p>
      </div>
      <div className="contact-icons">
        <div className="contact-icons-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#147efb"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-map-search"
            >
              <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
              <path d="M9 4v13"></path>
              <path d="M15 7v5"></path>
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M20.2 20.2l1.8 1.8"></path>
            </svg>
          </span>
          <div class="contact__info">
            <h3>Location</h3>
            <p className="contact-p">Pune, Maharshtra</p>
          </div>
        </div>
        <div className="contact-icons-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#147efb"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-mail"
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </span>
          <div class="contact__info">
            <h3>Mail</h3>
            <a href="mailto:sanketdadali05@gamil.com">
              sanketdadali05@gamil.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
