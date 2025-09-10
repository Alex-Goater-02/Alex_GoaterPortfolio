import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.8 }}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className="monitor">
        <div className="screen" />
        <div className="webcam">
          <div className="spinner" />
        </div>
      </div>
    </motion.div>
  );
}
