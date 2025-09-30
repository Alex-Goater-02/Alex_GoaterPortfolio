import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { ArrowDown } from "./icons/ArrowDown";
import "./index.css";

function App() {
  const typedRef = useRef(null);
  const nextSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

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

  const projects = [
    {
      title: "Project One",
      image: "/images/project1.png",
      link: "https://goataria.co.uk/",
      description: "A modern responsive web application",
    },
    {
      title: "Project Two",
      image: "/images/project2.png",
      link: "https://goataria.co.uk/",
      description: "Interactive user interface project",
    },
    {
      title: "Project Three",
      image: "/images/project3.png",
      link: "https://goataria.co.uk/",
      description: "E-commerce platform development",
    },
    {
      title: "Project Four",
      image: "/images/project4.png",
      link: "https://goataria.co.uk/",
      description: "Portfolio website showcasing projects",
    },
    {
      title: "Project Five",
      image: "/images/project5.png",
      link: "https://goataria.co.uk/",
      description: "Web application with backend integration",
    },
    {
      title: "Project Six",
      image: "/images/project6.png",
      link: "https://goataria.co.uk/",
      description: "Custom CMS for content management",
    },
  ];

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <motion.section
        className="hero-section"
        aria-label="Hero Section"
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
          <span
            ref={typedRef}
            aria-live="polite"
            aria-label="Full Stack Developer, Graduate Web Developer, Junior Web Developer, Problem Solver, Tech Enthusiast"
          ></span>
        </h2>

        <div className="arrow-wrapper" onClick={scrollToNextSection}>
          <ArrowDown className="down-arrow" />
        </div>
      </motion.section>

      <section
        ref={nextSectionRef}
        className="next-section"
        aria-label="About Me Section"
      >
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
            I started coding at 12, building my first competitive gaming league
            website, which I later sold after attracting over 1,000 sign-ups in
            a week. Since then, I’ve created responsive, user-friendly
            applications through university projects and freelance work,
            following accessibility and GDPR standards.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I’m eager to start my career as a Junior/Graduate Full Stack
            Developer, contributing to innovative digital solutions and growing
            my technical expertise in professional environments.
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
                "Tailwind CSS",
                "Bootstrap",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-box"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  aria-label={`Skill: ${skill}`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={projectsSectionRef}
        className="projects-section"
        aria-label="Projects Section"
      >
        <div className="content">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h3>

          <div className="projects-rows">
            {projects.map((project, index) => {
              const rowIndex = Math.floor(index / 3);
              const fromLeft = rowIndex % 2 === 0;
              const initialX = fromLeft ? -80 : 80;

              return (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  initial={{ opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
                  viewport={{ once: true }}
                  aria-label={`Project: ${project.title}. ${project.description}. Click to view project.`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                  />
                  <h4>{project.title}</h4>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="footer-name">Alex Goater</span>. All Rights
            Reserved.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Alex-Goater-02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img src="/images/github.svg" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-goater-433933232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:alex.goater@outlook.com" aria-label="Send Email">
              <img src="/images/email.svg" alt="Email" />
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;
