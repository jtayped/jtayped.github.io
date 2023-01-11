import "./projects.css";

import { Pomodoro } from "../../assets/projects/index";

import { ProjectItem } from "../../components/index";

const Projects = () => {
  const projectItems = [
    {
      title: "Pomodoro",
      img: Pomodoro,
      link: "https://jtayped.github.io/pomodoro-timer/",
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
      <h3>Here are some of the projects I have done</h3>
      <ul className="project-section">
        {projectItems.map((project, index) => (
          <ProjectItem index={index} title={project.title} img={project.img} link={project.link} />
        ))}
      </ul>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </div>
  );
};

export default Projects;
