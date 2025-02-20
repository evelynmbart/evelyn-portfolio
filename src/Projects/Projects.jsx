import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    name: "Think",
    description:
      "A social media app that allows you to share your thoughts and ideas with others",
    technologies: ["Typescript", "React"],
    image: "../projects/think.png",
    featured: true,
    link: "/think",
  },
  {
    name: "Home Cooked",
    description:
      "A recipe app that allows you to search for recipes by name or by ingredients",
    technologies: ["Typescript", "React"],
    image: "../../projects/home-cooked.png",
    link: "/home-cooked",
  },
  {
    name: "Mappi",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/mappi.png",
    link: "/mappi",
  },
  {
    name: "Pup Progress",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/pup-progress.png",
    featured: true,
    link: "/pup-progress",
  },

  {
    name: "NE RiverFlow",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/riverflow.png",
    link: "/riverflow",
  },
  {
    name: "CycleSync",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/cycle-sync.png",
    link: "/cycle-sync",
  },
  {
    name: "Gridddle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/gridddle.png",
    featured: true,
    link: "/gridddle",
  },
  {
    name: "Last Meals",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/last-meals.png",
    link: "last-meals",
  },
  {
    name: "Farkle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/farkle.png",
    link: "/farkle",
  },

  {
    name: "MarkIt",
    description:
      "Use Mappi to locate your must-have shops/destinations and find the perfect neighborhood for you and your lifestyle",
    technologies: ["Typescript", "React"],
    image: "../../projects/markit.png",
    featured: true,
    link: "/markit",
  },

  {
    name: "Jaipur Score",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/jaipur.png",
    link: "/jaipur",
  },

  {
    name: "Pomodoro",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/pomodoro.png",
    link: "/pomodoro",
  },
  {
    name: "Cart Compare",
    description:
      "Compare prices of products across different stores and find the best deals",
    technologies: ["Typescript", "React"],
    image: "../../projects/cart-compare.png",
    featured: true,
    link: "/cart-compare",
  },

  // {
  //   name: "Tile Slider",
  //   description:
  //     "A map app that allows you to search for locations by name or by address",
  //   technologies: ["Javascript", "React"],
  //   image: "../../projects/tile-slider.png",
  //   link: "/tile-slider",
  // },
  {
    name: "Hangman",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hangman.png",
    link: "/hangman",
  },
  {
    name: "Hole-in-One",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hole-in-one.png",
    link: "/hole-in-one",
  },
  // {
  //   name: "Blog Woohoo",
  //   description:
  //     "A map app that allows you to search for locations by name or by address",
  //   technologies: ["Typescript", "React"],
  //   image: "../../projects/blogwoohoo.png",
  //   link: "/blogwoohoo",
  // },
];

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

      <div className="projects__grid">
        {projects.map((project) => (
          <div
            className={`project ${project.featured ? "featured" : ""}`}
            key={project.name}
          >
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="project-top">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-bottom">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
