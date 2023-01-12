import "./projectItem.css";
import { motion } from "framer-motion";

const ProjectItem = (props) => {
  return (
    <motion.li
      className="project-item"
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
        style={{
          background: `url(${props.img}) center/cover`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.a>
      <article className="details">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button>Visit</button>
        </a>
      </article>
    </motion.li>
  );
};

export default ProjectItem;
