import { Link, useParams } from "react-router-dom";
import "./ProjectPage.css";

function ProjectPage({ PROJECTS }) {
  const { id } = useParams();
  const project = PROJECTS.find((project) => project.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-page">
      <header className="header">
        <nav className="nav">
          <Link to="/">Back to Home</Link>
        </nav>
      </header>
      {project && (
        <div>
          <div className="text" key={project.name}>
            <h1>{project.name}</h1>
            <p className="description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
          <article className="content">
            <h2>{project.title}</h2>
            <p>{project.firstP}</p>
            <p>{project.secondP}</p>
            <div className="image-placeholder">
              <img src={project.image} alt={project.name} />
            </div>
            <p>{project.thirdP}</p>
          </article>
        </div>
      )}
    </section>
  );
}

export default ProjectPage;
