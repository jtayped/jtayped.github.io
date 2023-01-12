import "./projects.css";

import { Pomodoro } from "../../assets/projects/index";

import { ProjectItem } from "../../components/index";

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      title: "Pomodoro",
      description:
        "This is a Pomodoro timer tool that includes a task manager and integrated study music, all built in React. Keep on track and motivated with our clean and user-friendly design.",
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
        {projectItems.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            link={project.link}
          />
        ))}
      </ul>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </div>
  );
};

export default Projects;
