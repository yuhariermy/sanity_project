import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/ermy-yuhari-bbb310148/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a target="_blank" href="https://www.facebook.com/ermie.harie/">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/ermieharie/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
