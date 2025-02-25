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
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsHeader>
        <HeaderFrame>
          <Subtitle>Projects</Subtitle>
          <Title>My Portfolio of Work</Title>
          <SubtitleDescription>
            A collection of {projects.length} applications showcasing my
            expertise in web development
          </SubtitleDescription>
        </HeaderFrame>
      </ProjectsHeader>

      <ProjectsList>
        {projects.map((project, index) =>
          <ProjectCard key={project.name} isEven={index % 2 === 0}>
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.name} />
            </ProjectImageWrapper>

            <ProjectContent>
              <ProjectMeta>
                <ProjectTitle>
                  {project.name}
                </ProjectTitle>
                <TechStack>
                  {project.technologies.map(tech =>
                    <TechTag key={tech}>
                      {tech}
                    </TechTag>
                  )}
                </TechStack>
              </ProjectMeta>

              <ProjectDescription>
                {project.description}
              </ProjectDescription>

              <ViewProjectButton href={project.link}>
                View Project
              </ViewProjectButton>
            </ProjectContent>
          </ProjectCard>
        )}
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 4rem 7rem;
  background-color: rgb(19, 19, 19);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const HeaderFrame = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.span`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: block;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 1rem 0;
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubtitleDescription = styled.p`
  font-size: 1.2rem;
  color: #888;
  margin-top: 1rem;
`;

const ProjectsList = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: ${props => (props.isEven ? "row" : "row-reverse")};

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProjectImageWrapper = styled.div`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectMeta = styled.div`margin-bottom: 1rem;`;

const ProjectTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(var(--primary-color-rgb), 0.1);
  border: 1px solid var(--primary-color);
  border-radius: 20px;
  color: var(--primary-color);
  font-size: 0.9rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
`;

const ViewProjectButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  border-radius: 30px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  align-self: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(var(--primary-color-rgb), 0.3);
  }
`;
