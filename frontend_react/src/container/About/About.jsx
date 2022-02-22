import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Web Application Developer",
    description: "I am a good developer",
    imgUrl: images.about01,
  },
  {
    title: "Back End Developer",
    description: "Enthusiast and making a several API",
    imgUrl: images.about02,
  },
  {
    title: "Title 3",
    description: "Title 3's description",
    imgUrl: images.about03,
  },
  {
    title: "Title 4",
    description: "Title 4's description",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    // empty notation is for
    <>
      <h2 className="head-text">
        I Know That
        <span>Good Designs</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
