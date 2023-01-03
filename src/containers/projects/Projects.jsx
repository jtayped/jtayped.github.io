import "./projects.css";

import {
  Mito,
  Notes,
} from "../../assets/projects/index";

import {ProjectItem} from '../../components/index'

const Projects = () => {
  const projectItems = [
    {
      title: "Mito",
      img: Mito,
    },
    {
      title: "Notes",
      img: Notes,
    },
  ];
  return (
    <div className="projects">
      <h2>Here are some of the projects I have done</h2>
      <div className="project-section">
        {projectItems.map((project, index) => (
          <ProjectItem index={index} title={project.title} img={project.img} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
