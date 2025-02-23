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
    link: "/project/1",
  },
  {
    name: "Gridddle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/gridddle.png",
    featured: true,
    link: "/project/12",
  },
  {
    name: "Home Cooked",
    description:
      "A recipe app that allows you to search for recipes by name or by ingredients",
    technologies: ["Typescript", "React"],
    image: "../../projects/home-cooked.png",
    link: "/project/9",
  },
  {
    name: "Mappi",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/mappi.png",
    link: "/project/6",
  },
  {
    name: "CycleSync",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/cycle-sync.png",
    link: "/project/14",
  },
  {
    name: "Pup Progress",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/pup-progress.png",
    featured: true,
    link: "/project/2",
  },
  {
    name: "MarkIt",
    description:
      "Use Mappi to locate your must-have shops/destinations and find the perfect neighborhood for you and your lifestyle",
    technologies: ["Typescript", "React"],
    image: "../../projects/markit.png",
    featured: true,
    link: "/project/5",
  },

  {
    name: "NE RiverFlow",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/riverflow.png",
    link: "/project/4",
  },

  {
    name: "Last Meals",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/last-meals.png",
    link: "/project/7",
  },

  {
    name: "Jaipur Score",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/jaipur.png",
    link: "/project/8",
  },

  {
    name: "Farkle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/farkle.png",
    featured: true,
    link: "/project/13",
  },
  {
    name: "Cart Compare",
    description:
      "Compare prices of products across different stores and find the best deals",
    technologies: ["Typescript", "React"],
    image: "../../projects/cart-compare.png",
    featured: true,
    link: "/project/15",
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
    name: "Pomodoro",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/pomodoro.png",
    link: "/project/3",
  },
  {
    name: "Hangman",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hangman.png",
    link: "/project/11",
  },
  {
    name: "Hole-in-One",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hole-in-one.png",
    link: "/project/10",
  },
  // {
  //   name: "Blog Woohoo",
  //   description:
  //     "A map app that allows you to search for locations by name or by address",
  //   technologies: ["Typescript", "React"],
  //   image: "../../projects/blogwoohoo.png",
  //   link: "/project/16",
  // },
];

const Projects = () => {
  // Function to arrange projects in the desired pattern
  const arrangeProjects = (projects) => {
    const featured = projects.filter((project) => project.featured);
    const nonFeatured = projects.filter((project) => !project.featured);

    const arranged = [];
    let featuredIndex = 0;
    let nonFeaturedIndex = 0;

    while (
      featuredIndex < featured.length ||
      nonFeaturedIndex < nonFeatured.length
    ) {
      // Add a row with large and small featured projects
      if (featuredIndex < featured.length - 1) {
        arranged.push({
          ...featured[featuredIndex],
          sizingClass: "featured-large",
        });
        arranged.push({
          ...featured[featuredIndex + 1],
          sizingClass: "featured-small",
        });
        featuredIndex += 2;
      }

      // Add a row of three non-featured projects
      for (let i = 0; i < 3 && nonFeaturedIndex < nonFeatured.length; i++) {
        arranged.push(nonFeatured[nonFeaturedIndex]);
        nonFeaturedIndex++;
      }
    }

    return arranged;
  };

  const arrangedProjects = arrangeProjects(projects);

  return (
    <section className="projects" id="projects">
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
        {arrangedProjects.map((project) => (
          <div
            className={`project ${
              project.featured ? `featured ${project.sizingClass}` : ""
            }`}
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
