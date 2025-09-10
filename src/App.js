import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

import LoadingScreen from "./LoadingScreen";
import { ArrowDown } from "./icons/ArrowDown";
import "./index.css";

function App() {
  const typedRef = useRef(null);
  const nextSectionRef = useRef(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!loading) {
      AOS.init({ duration: 1200, once: true });

      const t = setTimeout(() => {
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
      }, 50);

      return () => clearTimeout(t);
    }
  }, [loading]);


  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loaderOverlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#000",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >

          <div className="hero-section" data-aos="fade-down">
            <img
              src="/images/alex_goater.jpeg"
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
          </div>

          <div ref={nextSectionRef} className="next-section">
            <h2>-</h2>
            <p>-</p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
