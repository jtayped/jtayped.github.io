import "./experienceItem.css";
import { motion } from "framer-motion";

const ExperienceItem = (props) => {
  return (
    <motion.li
      key={props.index}
      className="experience-item"
      viewport={{ once: true }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      whileHover={{ scale: 1.025}}
    >
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </motion.li>
  );
};

export default ExperienceItem;
