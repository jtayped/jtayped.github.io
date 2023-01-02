import "./contact.css";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_egcfa5j",
        "template_ho4b9zn",
        form.current,
        "eW5t-VKk05ThCONE2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <form className="contact-main" ref={form} onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <input
          type="text"
          className="name"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="text"
          className="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="subject"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          className="message"
          rows="10"
          name="message"
          placeholder="Message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
};

export default Contact;
