import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <header className="hero-main">
        <motion.h1
          initial={{ y: "-50vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          exit={{ scale: 0, duration: 0.5 }}
        >
          Joel Taylor
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          I'll make your website so user-friendly, even your grandma could
          navigate it
        </motion.h2>
        <a href="#contact">
          <motion.button
            initial={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0)", opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              borderRadius: 15,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
              scale: 1.05,
              transition: {
                delay: 0,
                duration: 0.25,
              },
            }}
            transition={{
              delay: 1.25,
            }}
          >
            Contact
          </motion.button>
        </a>
      </header>
    </div>
  );
};

export default Hero;
