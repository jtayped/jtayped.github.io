import "./projectItem.css";
import { motion } from "framer-motion";

const ProjectItem = (props) => {
  return (
    <motion.div
      key={props.index}
      className="project-item"
      style={{
        background: `url(${props.img}) center/cover`,

        backgroundPosition: "center",
        backgroundSize: "cover",
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
    ></motion.div>
  );
};

export default ProjectItem;
