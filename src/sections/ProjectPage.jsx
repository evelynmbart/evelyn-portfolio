import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function ProjectPage({ PROJECTS }) {
  const { id } = useParams();
  const project = PROJECTS.find((project) => project.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectSection>
      <Header>
        <Nav>
          <StyledLink to="/">
            <FaHome size={32} title="Back to Home" />
          </StyledLink>
        </Nav>
      </Header>
      {project && (
        <div>
          <Text key={project.name} src={project.mainImage}>
            <Title>{project.name}</Title>
            <Description>{project.description}</Description>
            <Technologies>
              {project.technologies.map((tech, index) => (
                <TechSpan key={index}>{tech}</TechSpan>
              ))}
            </Technologies>
          </Text>
          <Content>
            <ContentTitle>{project.title}</ContentTitle>
            <ContentText>{project.firstP}</ContentText>
            <ContentText>{project.secondP}</ContentText>
            <ImagePlaceholder>
              <img src={project.image} alt={project.name} />
            </ImagePlaceholder>
            <ContentText>{project.thirdP}</ContentText>
          </Content>
        </div>
      )}
    </ProjectSection>
  );
}

export default ProjectPage;

const ProjectSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(19, 19, 19);
`;

const Header = styled.header`
  background-color: rgb(19, 19, 19);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid white;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: var(--primary-color);
  }
`;

const Text = styled.div`
  position: relative;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    border-radius: 30px;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  border-radius: 30px;
  padding: 20px;
  height: 200px;
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(120deg, #fff, #e6e6e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 1rem 0;
  line-height: 1.4;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Technologies = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const TechSpan = styled.span`
  padding: 0.5rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease-in-out;
`;

const Content = styled.article`
  max-width: 800px;
  margin: 5% 20% 0 20%;
  padding: 0 5rem;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const ContentTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: white;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ContentText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-indent: 2.5rem;
  color: white;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;

  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: contain;
    object-position: center;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;
