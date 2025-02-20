import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__header">
        <div className="projects__header-frame">
          <span className="projects__subtitle">Projects</span>
          <h2 className="projects__title">
            Check out some things I&apos;ve been working on
          </h2>
          <span className="projects__top-left-corner"></span>
          <span className="projects__top-right-corner"></span>
          <span className="projects__bottom-left-corner"></span>
          <span className="projects__bottom-left-corner-outside"></span>
          <span className="projects__bottom-right-corner"></span>
        </div>
      </div>

      <div className="projects__grid">{/* Space for project items */}</div>
    </section>
  );
};

export default Projects;
