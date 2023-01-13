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
    >
      <h4>{props.title}</h4>
      <motion.p
        initial={{ paddingLeft: 50 }}
        whileInView={{ paddingLeft: 16 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        {props.description}
      </motion.p>
    </motion.li>
  );
};

export default ExperienceItem;
