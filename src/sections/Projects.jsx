import { Link } from "react-router-dom";
import styled from "styled-components";

const projects = [
  {
    name: "Think",
    description:
      "A social media app that allows you to share your thoughts and ideas with others",
    technologies: ["Typescript", "React"],
    image: "../projects/think.png",
    featured: true,
    link: "/project/1"
  },
  {
    name: "Gridddle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/gridddle.png",
    featured: true,
    link: "/project/12"
  },
  {
    name: "Home Cooked",
    description:
      "A recipe app that allows you to search for recipes by name or by ingredients",
    technologies: ["Typescript", "React"],
    image: "../../projects/home-cooked.png",
    link: "/project/9"
  },
  {
    name: "Mappi",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/mappi.png",
    link: "/project/6"
  },
  {
    name: "CycleSync",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/cycle-sync.png",
    link: "/project/14"
  },
  {
    name: "Pup Progress",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/pup-progress.png",
    featured: true,
    link: "/project/2"
  },
  {
    name: "MarkIt",
    description:
      "Use Mappi to locate your must-have shops/destinations and find the perfect neighborhood for you and your lifestyle",
    technologies: ["Typescript", "React"],
    image: "../../projects/markit.png",
    featured: true,
    link: "/project/5"
  },

  {
    name: "NE RiverFlow",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/riverflow.png",
    link: "/project/4"
  },

  {
    name: "Last Meals",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/last-meals.png",
    link: "/project/7"
  },

  {
    name: "Jaipur Score",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Javascript", "React"],
    image: "../../projects/jaipur.png",
    link: "/project/8"
  },

  {
    name: "Farkle",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/farkle.png",
    featured: true,
    link: "/project/13"
  },
  {
    name: "Cart Compare",
    description:
      "Compare prices of products across different stores and find the best deals",
    technologies: ["Typescript", "React"],
    image: "../../projects/cart-compare.png",
    featured: true,
    link: "/project/15"
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
    link: "/project/3"
  },
  {
    name: "Hangman",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hangman.png",
    link: "/project/11"
  },
  {
    name: "Hole-in-One",
    description:
      "A map app that allows you to search for locations by name or by address",
    technologies: ["Typescript", "React"],
    image: "../../projects/hole-in-one.png",
    link: "/project/10"
  }
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
  const arrangeProjects = projects => {
    const featured = projects.filter(project => project.featured);
    const nonFeatured = projects.filter(project => !project.featured);

    const arranged = [];
    let featuredIndex = 0;
    let nonFeaturedIndex = 0;

    while (
      featuredIndex < featured.length ||
      nonFeaturedIndex < nonFeatured.length
    ) {
      // Add two featured projects side by side
      if (featuredIndex < featured.length - 1) {
        arranged.push({
          ...featured[featuredIndex],
          sizingClass: "featured"
        });
        arranged.push({
          ...featured[featuredIndex + 1],
          sizingClass: "featured"
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
    <ProjectsSection id="projects">
      <ProjectsHeader>
        <HeaderFrame>
          <Subtitle>Projects</Subtitle>
          <Title>Check out some things I&apos;ve been working on</Title>
          <TopLeftCorner />
          <TopRightCorner />
          <BottomLeftCorner />
          <BottomLeftCornerOutside />
          <BottomRightCorner />
        </HeaderFrame>
      </ProjectsHeader>

      <ProjectsGrid>
        {arrangedProjects.map(project =>
          <ProjectCard key={project.name} featured={project.featured}>
            <ProjectLink
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTop>
                <ProjectImage src={project.image} alt={project.name} />
              </ProjectTop>
              <ProjectBottom featured={project.featured}>
                <ProjectTitle featured={project.featured}>
                  {project.name}
                </ProjectTitle>
                <ProjectDescription featured={project.featured}>
                  {project.description}
                </ProjectDescription>
              </ProjectBottom>
            </ProjectLink>
          </ProjectCard>
        )}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 1rem 7rem;
  background-color: rgb(19, 19, 19);

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 0;
`;

const HeaderFrame = styled.div`
  position: relative;
  max-width: 400px;
  padding: 2rem 8rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Corner = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
`;

const TopLeftCorner = styled(Corner)`
  top: 0;
  left: 0;
  border-top: 2px solid var(--primary-color);
  border-left: 2px solid var(--primary-color);
`;

const TopRightCorner = styled(Corner)`
  top: 0;
  right: 0;
  border-top: 2px solid var(--primary-color);
  border-right: 2px solid var(--primary-color);
`;

const BottomLeftCorner = styled(Corner)`
  bottom: 0;
  left: 0;
  border-bottom: 2px solid var(--primary-color);
  border-left: 2px solid var(--primary-color);
`;

const BottomLeftCornerOutside = styled(Corner)`
  bottom: -15px;
  left: -15px;
  border-top: 2px solid var(--primary-color);
  border-right: 2px solid var(--primary-color);
`;

const BottomRightCorner = styled(Corner)`
  bottom: 0;
  right: 0;
  border-bottom: 2px solid var(--primary-color);
  border-right: 2px solid var(--primary-color);
`;

const Subtitle = styled.span`
  display: block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  color: var(--text-color);
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  max-width: 100%;
  height: ${props => (props.featured ? "384px" : "390px")};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  width: 100%;
  border: ${props =>
    props.featured ? "none" : "1px solid hsla(0, 0%, 100%, 0.2)"};

  &.featured {
    grid-column: span 6;
    max-width: 590px;
  }

  &:not(.featured) {
    grid-column: span 4;
    max-width: 387px;
  }

  &:hover {
    transform: ${props =>
      props.featured ? "scale(1)" : "translateY(-8px) scale(1.02)"};
    box-shadow: ${props => !props.featured && "0 10px 20px rgba(0, 0, 0, 0.3)"};
    filter: ${props => !props.featured && "brightness(1.1)"};
  }

  @media (max-width: 1024px) {
    &.featured {
      grid-column: span 12;
      max-width: 100%;
    }

    &:not(.featured) {
      grid-column: span 6;
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    &.featured,
    &:not(.featured) {
      grid-column: span 12;
      max-width: 100%;
    }
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const ProjectTop = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  &:hover {
    transform: ${props => props.featured && "scale(1.05)"};
    box-shadow: ${props => props.featured && "0 5px 15px rgba(0, 0, 0, 0.2)"};
  }
`;

const ProjectBottom = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${props => (props.featured ? "auto" : "40%")};
  min-height: ${props => props.featured && "30%"};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${props =>
    props.featured
      ? "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)"
      : "rgb(50, 50, 50)"};
  border-radius: ${props => (props.featured ? "0" : "0 0 10px 10px")};
  position: ${props => (props.featured ? "absolute" : "relative")};
  bottom: ${props => props.featured && "0"};
  left: ${props => props.featured && "0"};
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(10px);
  transition: transform 0.3s ease;
  color: white;
  z-index: ${props => props.featured && "2"};
`;

const ProjectTitle = styled.h3`
  font-size: ${props => (props.featured ? "2rem" : "1.7rem")};
  font-weight: 600;
  margin: 0;
  color: white;
`;

const ProjectDescription = styled.p`
  font-size: ${props => (props.featured ? "1.2rem" : "16px")};
  margin: ${props => (props.featured ? "0.5rem 0 0 0" : "0")};
  color: ${props => (props.featured ? "rgba(255, 255, 255, 0.9)" : "white")};
`;
