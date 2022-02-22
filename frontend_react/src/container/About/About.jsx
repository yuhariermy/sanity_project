import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import "./About.scss";

const abouts = [
  {
    title: "Web Application Developer",
    description: "I am a good developer",
  },
  {
    title: "Back End Developer",
    description: "Enthusiast and making a several API",
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
            whileInHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
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
