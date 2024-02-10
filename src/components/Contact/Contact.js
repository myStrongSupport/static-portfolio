import React, { useRef } from "react";
import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y08p3ao",
        "template_7e7682x",
        form.current,
        "C6OrA1lXce3594J2E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="c">
      <div className="c-banner"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h3>Let's discus your project</h3>
          <ul className="c-data">
            <li>
              <img src={phone} alt="" />
              +09 936 5051 630
            </li>
            <li>
              <img src={email} alt="" />
              hamed.husseini.official199@gmail.com
            </li>
            <li>
              <img src={address} alt="" />
              Ghasemi Esmailabad Nasim Shar Tehran
            </li>
          </ul>
        </div>
        <div className="c-right">
          <p className="c-right-text">
            <span className="c-bold">What's your story?</span>
            Get in touch,Always available for freelancing if the right project
            comes along to me
          </p>
          <form className="c-form" onSubmit={submitHandler} ref={form}>
            <div className="form-container">
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="from_name"
              />
            </div>
            <div className="form-container">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                name="user_subject"
              />
            </div>
            <div className="form-container">
              <input
                type="text"
                id="Email"
                placeholder="Email"
                name="user_email"
              />
            </div>
            <div className="form-container">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Messages"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
