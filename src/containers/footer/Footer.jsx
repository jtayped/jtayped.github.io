import "./footer.css";
import socials from "../about/socials";
import { SocialsItem } from "../../components/index";

const Footer = () => {
  return (
    <div className="footer">
      <h4>Joel Taylor</h4>
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
      <ul className="pages">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
