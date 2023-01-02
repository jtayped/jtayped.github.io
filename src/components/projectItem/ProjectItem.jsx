import "./projectItem.css";
import { motion } from "framer-motion";

const ProjectItem = (props) => {
  return (
    <motion.div
      key={props.index}
      className="project-item"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "brightness(60%)",
      }}
      viewport={{ once: true }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: props.index * 0.2,
        },
      }}
    >
      <h3>{props.title}</h3>
    </motion.div>
  );
};

export default ProjectItem;
