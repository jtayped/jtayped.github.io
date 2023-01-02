import "./projects.css";

import {
  Campillo,
  Ironworks,
  Mito,
  Powergym,
} from "../../assets/projects/index";

import {ProjectItem} from '../../components/index'

const Projects = () => {
  const projectItems = [
    {
      title: "Campillo",
      img: Campillo,
    },
    {
      title: "Ironworks Gym",
      img: Ironworks,
    },
    {
      title: "Power Gym Arena",
      img: Powergym,
    },
    {
      title: "Mito",
      img: Mito,
    },
  ];
  return (
    <div className="projects">
      <h2>Here are some of the projects I have done</h2>
      <div className="project-section">
        {projectItems.map((project, index) => (
          <ProjectItem index={index} title={project.title} img={project.img}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
