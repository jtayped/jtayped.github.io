import "./projects.css";

import { Mito, Notes, Todo } from "../../assets/projects/index";

import { ProjectItem } from "../../components/index";

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
    {
      title: "Todo",
      img: Todo,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "ProjectsPage",
    name: "Joel Taylor's Projects",
    description:
      "View a selection of projects created by Joel Taylor, a skilled computer technician and programmer.",
    projects: projectItems.map((project) => ({
      "@type": "Project",
      name: project.title,
      image: project.img,
    })),
  };

  return (
    <div className="projects" id="projects">
      <h2>Here are some of the projects I have done</h2>
      <div className="project-section">
        {projectItems.map((project, index) => (
          <ProjectItem index={index} title={project.title} img={project.img} />
        ))}
      </div>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </div>
  );
};

export default Projects;
