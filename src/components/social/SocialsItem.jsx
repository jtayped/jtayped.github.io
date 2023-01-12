import "./socialsItem.css";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const SocialsItem = (props) => {
  return (
    <motion.li
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
      <SocialIcon
        url={props.socialsLink}
        bgColor="white"
        target="_blank"
        rel="noopener noreferrer"
      />
    </motion.li>
  );
};

export default SocialsItem;
