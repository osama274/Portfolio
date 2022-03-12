import React, { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_ohhe5ri","template_vj65zdg","f1Pk0qpUx4klJRbZb")
     e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>alhaj2904@gmail.com</h5>
            <a
              href="mailto:alhaj2904@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Osama Alhaj Abdullah</h5>
            <a
              href="https://www.messenger.com/t/1001847139929871"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone+4917662778984"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="" placeholder="Your Full Name" />
          <input type="text" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
