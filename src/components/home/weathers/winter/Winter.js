import "./Winter.css";
import { motion } from "framer-motion";
export const Winter = () => {
  const snowflakes = Array.from({ length: 150 }).map((_, index) => (
    <motion.div
      key={index}
      className="snowflake"
      style={{
        top: `${Math.random() * -100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10}px`,
        height: `${Math.random() * 10}px`,
      }}
      animate={{ top: "100vh" }}
      transition={{
        duration: Math.random() * 5 + 2,
        repeat: Infinity,
      }}
    />
  ));

  return <div className="snow">{snowflakes}</div>;
};
