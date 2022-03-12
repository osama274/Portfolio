import React from "react";
  import Me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className=" container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About__Image" />
          </div>
        </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small className="">3+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small className="">200+ Worldwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small >80+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          recusandae voluptas quos odit dolor error eaque eum magni totam vero
          esse libero nihil doloremque maxime, temporibus placeat aspernatur
          ipsum repellat?
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
      </div>
    </section>
  );
};

export default About;
