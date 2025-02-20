import "./Projects.css";

const projects = [
  {
    name: "Think",
    description:
      "A social media app that allows you to share your thoughts and ideas with others",
    technologies: ["Typescript", "React"],
    image: "../projects/think.png",
    featured: true,
  },
  {
    name: "Home Cooked",
    description:
      "A recipe app that allows you to search for recipes by name or by ingredients",
    technologies: ["Typescript", "React"],
    image: "../../projects/home-cooked.png",
  },
  {
    name: "Mappi",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/mappi.png",
  },
  {
    name: "Pup Progress",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/pup-progress.png",
    featured: true,
  },

  {
    name: "NE RiverFlow",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/riverflow.png",
  },
  {
    name: "CycleSync",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/cycle-sync.png",
  },
  {
    name: "Gridddle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/gridddle.png",
    featured: true,
  },
  {
    name: "Last Meals",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/last-meals.png",
  },
  {
    name: "Farkle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/farkle.png",
  },

  {
    name: "MarkIt",
    description:
      "Use Mappi to locate your must-have shops/destinations and find the perfect neighborhood for you and your lifestyle",
    technologies: ["Typescript", "React"],
    image: "../../projects/markit.png",
    featured: true,
  },

  {
    name: "Jaipur Score",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/jaipur.png",
  },

  {
    name: "Pomodoro",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/pomodoro.png",
  },
  {
    name: "Cart Compare",
    description:
      "Compare prices of products across different stores and find the best deals",
    technologies: ["Typescript", "React"],
    image: "../../projects/cart-compare.png",
    featured: true,
  },

  // {
  //   name: "Tile Slider",
  //   description:
  //     "A map app that allows you to search for locations by name or by address",
  //   technologies: ["Javascript", "React"],
  //   image: "../../projects/tile-slider.png",
  // },
  {
    name: "Hangman",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hangman.png",
  },
  {
    name: "Hole-in-One",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hole-in-one.png",
  },
  // {
  //   name: "Blog Woohoo",
  //   description:
  //     "A map app that allows you to search for locations by name or by address",
  //   technologies: ["Typescript", "React"],
  //   image: "../../projects/blogwoohoo.png",
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="project-top">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-bottom">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
