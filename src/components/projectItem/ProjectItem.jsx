import "./projectItem.css";
import { motion } from "framer-motion";

const ProjectItem = (props) => {
  return (
    <motion.li
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
      <motion.a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-item"
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
      >
        <button
          className="project-item"
          style={{
            background: `url(${props.img}) center/cover`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></button>
      </motion.a>
    </motion.li>
  );
};

export default ProjectItem;
