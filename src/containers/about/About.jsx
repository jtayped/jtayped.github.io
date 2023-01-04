import "./about.css";
import socials from "./socials";

import AboutImage from "../../assets/about.png";
import { motion } from "framer-motion";
import { SocialsItem } from "../../components/index";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "AboutPage",
    name: "About Joel Taylor",
    description:
      "Learn more about Joel Taylor, a skilled computer technician and programmer.",
    image: AboutImage,
    mainEntity: {
      "@type": "Person",
      name: "Joel Taylor",
      description:
        "Joel Taylor is a 16-year-old student studying Batxillerat at La Salle Mollerussa. He is skilled in computer repair and building, programming, and server maintenance.",
      sameAs: socials.map((social) => social.socialsLink),
    },
  };
  return (
    <div className="about" id="about">
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
            of them, I've even got server maintenance down pat. Basically, if
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
          whileInView={{ opacity: 1, border: "2rem solid #00628b" }}
          transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
          viewport={{ once: true }}
          className="about-right"
        >
          <img src={AboutImage} alt="This is me!" />
        </motion.div>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </div>
    </div>
  );
};

export default About;
