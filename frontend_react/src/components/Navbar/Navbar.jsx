import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav className="app__navbar">
      <a href="#home">
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="app__navbar-links">
        {["home", "work", "skills", "contact", "about"].map((item, index) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`} key={item + index}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToogle(true)} />
        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToogle(false)} />
            <ul>
              {["home", "work", "skills", "contact", "about"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToogle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
