import "./projectItem.css";
import { motion } from "framer-motion";

const ProjectItem = (props) => {
  return (
    <motion.div
      key={props.index}
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
      <motion.div
        className="project-item"
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
        style={{
          background: `url(${props.img}) center/cover`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </motion.div>
  );
};

export default ProjectItem;
