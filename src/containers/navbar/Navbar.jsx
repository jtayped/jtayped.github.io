import "./navbar.css";
import Wave from "react-wavify";
import { motion } from "framer-motion";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar-main");
    const logo = this.document.querySelector(".logo");

    if (window.pageYOffset > 0) {
      header.classList.add("navbar-on-scroll-main");
      logo.classList.add("logo-on-scroll");
    } else {
      header.classList.remove("navbar-on-scroll-main");
      logo.classList.remove("logo-on-scroll");
    }
  });
  
  return (
    <div className="navbar">
      <div className="navbar-main">
        <div className="navbar-left">
          <motion.div
            drag
            dragConstraints={{
              left: 5,
              right: 5,
              top: 5,
              bottom: 5,
            }}
            whileHover={{
              scale: 1.05,
              color: "red",
            }}
            whileTap={{
              scale: 1.025,
            }}
            className="logo"
          >
            <p className="logo-J">J</p>
            <p className="logo-T">T</p>
          </motion.div>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <motion.a href="#contact">
              <motion.button
                whileHover={{
                  y: -3,
                  boxShadow: "0 15px 10px rgba(0, 0, 0, 0.1)",
                  transition: {
                    delay: 0,
                  },
                }}
              >
                Contact
              </motion.button>
            </motion.a>
          </ul>
        </div>
      </div>
      <Wave
        className="wave"
        fill="#00628b"
        paused={false}
        options={{
          height: 100,
          amplitude: 25,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
  );
};

export default Navbar;
