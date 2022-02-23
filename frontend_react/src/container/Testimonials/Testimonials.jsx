import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client.js";
import { motion } from "framer-motion";

import "./Testimonials.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => setCurrentIndex(index);

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgUrl)} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === 0)
                  ? testimonials.length - 1
                  : currentIndex - 1
              }
            >
              <HiChevronLeft />
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1)
                  ? 0
                  : currentIndex + 1
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials",
  "app__primarybg"
);
