import React, { useRef, useState, useEffect } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import contact from "../img/contact.gif";
import { useTheme } from "../context/ThemeContext";
import ContactDark from "../darkmodecomponents/ContactDark";
import toast from "react-hot-toast";

const Contact = () => {
  const { theme } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lrteb3c", "template_da19ncc", form.current, {
        publicKey: "-4qBl5d4gcqRcLrE8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    toast.success("Thanks for Reaching Out!")

    form.current.reset();
  };
  return theme == "dark" ? (
    <ContactDark />
  ) : (
    <div id="section5">
      <div className="contact-heading">
        <h1>Contact</h1>
      </div>
      <div className="contact-s-1">
        <p className="contact-heading-2">Don't be shy! Hit me up! 👇</p>
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
      <div className="contact-container">
        <div className="contact-img">
          <img src={contact} />
        </div>
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>GET IN TOUCH</span>
                </div>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="screen-body-item"
              >
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      id="user_name"
                      name="from_name"
                      placeholder="NAME"
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="email"
                      id="user_email"
                      name="from_email"
                      placeholder="EMAIL"
                      required
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      id="message"
                      name="message"
                      placeholder="MESSAGE"
                      required
                    ></textarea>
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" type="submit">
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
