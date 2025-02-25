import styled from "styled-components";

const projects = [
  {
    name: "Think",
    description:
      "Test your trivia knowledge with this fun and addictive quiz app.",
    technologies: ["Typescript", "React"],
    image: "../projects/think.png",
    featured: true,
    link: "/project/1"
  },
  {
    name: "Home Cooked",
    description:
      "Your online recipe catalog, where you can keep and create recipes for all your favorite foods.",
    technologies: ["Typescript", "React"],
    image: "../../projects/home-cooked.png",
    link: "/project/9"
  },
  {
    name: "Mappi",
    description:
      "Find the perfect NYC neighborhood for you and your lifestyle.",
    technologies: ["Typescript", "React"],
    image: "../../projects/mappi.png",
    link: "/project/6"
  },
  {
    name: "Gridddle",
    description:
      "With daily inspiration, share your pixelated masterpieces with the world.",
    technologies: ["Typescript", "React"],
    image: "../../projects/gridddle.png",
    featured: true,
    link: "/project/12"
  },
  {
    name: "CycleSync",
    description:
      "A personalized period tracker that helps you understand yourself and your cycle.",
    technologies: ["Typescript", "React"],
    image: "../../projects/cycle-sync.png",
    link: "/project/14"
  },
  {
    name: "Pup Progress",
    description:
      "Chapter-based or freestyle training programs for you and your pup!",
    technologies: ["Javascript", "React"],
    image: "../../projects/pup-progress.png",
    featured: true,
    link: "/project/2"
  },
  {
    name: "MarkIt",
    description:
      "The only bookmark hub you'll ever need. Save, organize, and share your favorite links with ease.",
    technologies: ["Typescript", "React"],
    image: "../../projects/markit.png",
    featured: true,
    link: "/project/5"
  },

  {
    name: "NE RiverFlow",
    description: "Track the water levels of the New England rivers and lakes.",
    technologies: ["Javascript", "React"],
    image: "../../projects/riverflow.png",
    link: "/project/4"
  },

  {
    name: "Farkle",
    description:
      "The classic dice game that tests your luck. Roll the dice and see if you can score big!",
    technologies: ["Typescript", "React"],
    image: "../../projects/farkle.png",
    featured: true,
    link: "/project/13"
  },
  {
    name: "Last Meals",
    description: "Journal your last meals and the memories they bring back.",
    technologies: ["Typescript", "React"],
    image: "../../projects/last-meals.png",
    link: "/project/7"
  },

  {
    name: "Jaipur Score",
    description: "A simple score keeper for the board game Jaipur.",
    technologies: ["Javascript", "React"],
    image: "../../projects/jaipur.png",
    link: "/project/8"
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
      "A productivity tool that helps you stay focused and productive.",
    technologies: ["Typescript", "React"],
    image: "../../projects/pomodoro.png",
    link: "/project/3"
  },
  {
    name: "Hangman",
    description:
      "The classic word game that tests your vocabulary and guessing skills.",
    technologies: ["Typescript", "React"],
    image: "../../projects/hangman.png",
    link: "/project/11"
  },
  {
    name: "Hole-in-One",
    description: "Donut themed memory game. Match the donuts to win!",
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
        {projects.map(project =>
          <ProjectCard
            key={project.name}
            featured={project.featured}
            className={project.featured ? "featured" : ""}
          >
            <ProjectLink href={project.link}>
              <ProjectTop>
                <ProjectImage
                  src={project.image}
                  alt={project.name}
                  featured={project.featured}
                />
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
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  height: ${props => (props.featured ? "384px" : "390px")};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid hsla(0, 0%, 100%, 0.2);

  &.featured {
    grid-column: span 2;
  }

  &:not(.featured) {
    grid-column: span 1;
  }

  &:hover {
    transform: ${props =>
      props.featured ? "scale(1)" : "translateY(-8px) scale(1.02)"};
    box-shadow: ${props => !props.featured && "0 10px 20px rgba(0, 0, 0, 0.3)"};
  }

  @media (max-width: 1024px) {
    &.featured {
      grid-column: span 3;
    }

    &:not(.featured) {
      grid-column: span 3;
    }
  }

  @media (max-width: 768px) {
    &.featured,
    &:not(.featured) {
      grid-column: span 1;
    }
  }
`;

const ProjectLink = styled.a`text-decoration: none;`;

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
  transition: transform 0.3s ease-in-out;
`;

const ProjectBottom = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(50, 50, 50, 0.5);
  border-radius: 0 0 10px 10px;

  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(10px);
  transition: transform 0.3s ease;
  color: white;
`;

const ProjectTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0;
  color: white;
`;

const ProjectDescription = styled.p`
  font-size: 16px;

  color: white;
`;
