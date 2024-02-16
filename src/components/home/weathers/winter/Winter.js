import "./Winter.css";
import { motion } from "framer-motion";
export const Winter = () => {
  const snowflakes = Array.from({ length: 150 }).map((_, index) => (
    <motion.div
      key={index}
      className="snowflake"
      style={{
        top: `${Math.random() * -100}%`, // Adjust starting position from top
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10}px`, // Adjust size of snowflakes
        height: `${Math.random() * 10}px`, // Adjust size of snowflakes
      }}
      animate={{ top: "100vh" }} // Animate to bottom of viewport
      transition={{
        duration: Math.random() * 5 + 2,
        repeat: Infinity,
        // repeatType: "reverse",
        // ease: "linear",
      }}
    />
  ));

  return <div className="snow">{snowflakes}</div>;
};
