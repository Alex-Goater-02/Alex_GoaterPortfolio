import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

import { ArrowDown } from "./icons/ArrowDown";
import "./index.css";

function App() {
  const typedRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Full Stack Developer",
          "Graduate Web Developer",
          "Junior Web Developer",
          "Problem Solver",
          "Tech Enthusiast",
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/alex_goater.jpeg?v=1"
          alt="Alex Goater"
          className="profile-pic"
        />
        <h1>- Alex Goater -</h1>
        <h2>
          <span ref={typedRef}></span>
        </h2>
        <div className="arrow-wrapper" onClick={scrollToNextSection}>
          <ArrowDown className="down-arrow" />
        </div>
      </motion.div>

      <div ref={nextSectionRef} className="next-section">
        <div className="content">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I'm Alex Goater, a First Class BSc (Hons) Computing Information
            Systems Management graduate from the University of Greenwich,
            passionate about developing modern, scalable web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My passion for coding began at 12, when I studied and experimented
            with web development to build my first competitive gaming league
            website, which I went on to sell after accumulating notable traffic
            with over 1000 sign-ups within a week. Since then, I've created
            responsive, user-friendly applications through both university
            coursework and freelance projects, ensuring compliance with WCAG
            accessibility standards and GDPR guidelines.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I'm eager to begin my career as a Junior/Graduate Full Stack
            Developer, where I can contribute to innovative digital solutions,
            collaborate in agile teams and continue to expand my technical
            expertise in a professional environment.
          </motion.p>

          <div className="skills-section">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Skills
            </motion.h3>
            <div className="skills-grid">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Vue",
                "Node.js",
                "PHP",
                "SQL",
                "Git/GitHub",
                "SEO",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-box"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
