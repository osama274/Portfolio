import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {FiDribbble } from "react-icons/fi";
import "./header.css";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/osama-al-haj-abdullah-a606001ba" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/osama274" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribbble" rel="noreferrer" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
