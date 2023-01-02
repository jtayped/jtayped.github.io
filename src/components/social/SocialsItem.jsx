import "./socialsItem.css";
import { motion } from "framer-motion";

const SocialsItem = (props) => {
  return (
    <motion.div
      key={props.index}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: props.index * 0.1 }}
      whileHover={{
        scale: 1.15,
        transition: {
          delay: 0,
        },
      }}
      className="socials-item"
    >
      <a href={props.socialsLink} target="_blank" rel="noreferrer noopener">
        <img src={props.img} alt={props.socialsID} />
      </a>
    </motion.div>
  );
};

export default SocialsItem;