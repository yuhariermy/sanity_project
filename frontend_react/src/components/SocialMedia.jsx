import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://facebook.com">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://instagram.com">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
