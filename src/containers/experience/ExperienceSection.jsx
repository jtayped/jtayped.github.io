import "./experience.css";
import { ExperienceItem } from "../../components/index";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Python",
      description:
        "I have been programming with Python for the past 2-3 years and it has quickly become my go-to programming language. I appreciate its simplicity and readability, as well as the vast range of libraries and frameworks available for tasks such as web development, data analysis, and machine learning.",
    },
    {
      title: "Web Development",
      description:
        "I have been doing web development for a year and am proficient in React and Framer Motion. I am skilled at creating interactive web applications and am always learning more about web development.",
    },
    {
      title: "Java",
      description:
        "I have been learning and using Java for a year, both in school and on my own. I am proficient in the language and am always looking to improve my skills. I am excited to see where my experience with Java will take me.",
    },
    {
      title: "FLL",
      description:
        "I have participated in the FIRST LEGO League competition for 4 years and have advanced to the finals in Tenerife and Torremolinos 3 times. The FLL is a robotics competition for students where teams design, build, and program a robot to complete missions and solve real-world problems.",
    },
    {
      title: "Debian Linux",
      description:
        "I am highly proficient in using Debian Linux, with strong skills in configuring, managing, and troubleshooting systems running the operating system. I have a solid understanding of how to secure and optimize Debian for various purposes, and I am able to customize and automate tasks using scripts and programming languages.",
    },
    {
      title: "General PC Knowledge",
      description:
        "I am skilled at repairing, maintaining, and troubleshooting computers and have a strong understanding of their hardware and software. I am always expanding my knowledge in this area because of my interest in computers. I am confident in my ability to work with computers and am eager to continue learning more about them.",
    },
    {
      title: "Networking",
      description:
        "One of my favorite hobbies is designing and tinkering with my home network. I find it satisfying to optimize my home connectivity and create a seamless experience for all my devices. I find the process of connecting devices and facilitating communication between them to be both challenging and rewarding.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    itemListElement: experiences.map((experience, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: experience.title,
      description: experience.description,
    })),
  };
  return (
    <div className="experience" id="experience">
      <div className="experience-main">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          These are some of the things I know
        </motion.h3>
        <ul className="experiences">
          {experiences.map((experience, index) => (
            <ExperienceItem
              index={index}
              title={experience.title}
              description={experience.description}
            />
          ))}
        </ul>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </div>
    </div>
  );
};

export default Experience;
