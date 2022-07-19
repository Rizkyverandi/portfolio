import React from "react";
import { motion } from "framer-motion";


const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const TransitionLayout = ({ children, ...rest }) => {
  return (
    <motion.div
      variants={variants}
      animate="enter"
      initial="hidden"
      exit="exit"
      transition={{ duration: 0.6, type: "easeInOut" }}
      style={{ position: "relative" }}
    >      
      {children}
    </motion.div>
  );
};

export default TransitionLayout;
