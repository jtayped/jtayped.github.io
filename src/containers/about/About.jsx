import "./about.css";

import { motion } from "framer-motion";
import { SocialsItem } from "../../components/index";
import {
  Whatsapp,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "../../assets/icons/socials/index";

const About = () => {
  const socials = [
    {
      socialsID: "Whatsapp",
      socialsLink: "https://wa.me/34640336946",
      img: Whatsapp,
    },
    {
      socialsID: "Instagram",
      socialsLink: "https://instagram.com/jtayped",
      img: Instagram,
    },
    {
      socialsID: "Facebook",
      socialsLink: "https://facebook.com/jtayped",
      img: Facebook,
    },
    {
      socialsID: "Twitter",
      socialsLink: "https://twitter.com/jtayped",
      img: Twitter,
    },
    {
      socialsID: "Youtube",
      socialsLink: "https://youtube.com/jtayped",
      img: Youtube,
    },
  ];

  return (
    <div className="about">
      <div className="about-main">
        <motion.div
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: "-30vw",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
              duration: 0.75,
              type: "spring",
            },
          }}
          className="about-left"
        >
          <h3>Hi there!</h3>
          <p>
            Hey there, Joel Taylor the computer wizard here! As a 16-year-old
            student studying Batxillerat at La Salle Mollerussa, I've managed to
            gather a ton of knowledge about computers and all things tech. I'm a
            pro at computer repair and building, and I can program with the best
            of them. I've even got server maintenance down pat. Basically, if
            it's related to computers, I'm your guy. Just call me the tech
            magician, because I can make computers do just about anything with a
            wave of my magical keyboard.
          </p>

          <div className="socials">
            {socials.map((social, index) => (
              <SocialsItem
                index={index}
                socialsID={social.socialsID}
                socialsLink={social.socialsLink}
                img={social.img}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, border: "0 solid #00628b" }}
          whileInView={{ opacity: 1, border: "1.5rem solid #00628b" }}
          transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
          viewport={{ once: true }}
          className="about-right"
        />
      </div>
    </div>
  );
};

export default About;
