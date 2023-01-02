import "./experienceItem.css";
import { motion } from "framer-motion";

const ExperienceItem = (props) => {
  return (
    <motion.div
      key={props.index}
      className="experience-item"
      viewport={{ once: true }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </motion.div>
  );
};

export default ExperienceItem;
