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
        <ProjectContainer>
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
            <ContentLinks>
              <ContentLink
                href={project.siteLink}
                target="_blank"
                title="Site link"
              >
                Check out the live site!
              </ContentLink>
              <ContentLink
                href={project.githubLink}
                target="_blank"
                title="Github link"
              >
                Check out the code!
              </ContentLink>
            </ContentLinks>
            <DemoContent>
              Here's a demo of the project:
              <Demo>
                <iframe src={project.embedLink} allowFullScreen></iframe>
              </Demo>
              <DemoLink href={project.shareLink} target="_blank">
                External Demo Link
              </DemoLink>
            </DemoContent>
          </Content>
        </ProjectContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  background-color: rgb(19, 19, 19);
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid white;
  margin-bottom: 2rem;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
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

  margin: 0 auto;
  padding: 2rem;
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;

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

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 180px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 150px;
    gap: 0.75rem;
  }
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

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  line-height: 1.4;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.3;
  }
`;

const Technologies = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: start;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
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

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const Content = styled.article`
  max-width: 800px;
  margin: 5% auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    margin: 2rem auto;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const ContentTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: white;
  font-weight: 800;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 0.75rem;
  }
`;

const ContentText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  padding-bottom: 2rem;
  text-indent: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    text-indent: 1.5rem;
    padding-bottom: 1rem;
  }
`;

const ContentLinks = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const ContentLink = styled.a`
  width: 200px;
  background: ${(props) =>
    props.secondary
      ? "black"
      : `linear-gradient(
    90deg,
    var(--secondary-color) 0%,
    var(--primary-color) 100%
  )`};
  color: ${(props) => (props.secondary ? "var(--primary-color)" : "white")};
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  border: 2px solid
    ${(props) => (props.secondary ? "var(--primary-color)" : "white")};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.secondary ? "var(--primary-color)" : "white"};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    &:before {
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 180px;
    font-size: 0.9rem;
    padding: 0.8rem 1rem;
  }
`;

const DemoContent = styled.div`
  color: white;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1rem;
    gap: 1.5rem;
  }
`;

const DemoLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  text-align: center;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Demo = styled.div`
  position: relative;
  padding-bottom: 62.5%;
  height: 100%;
  width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin: 1.5rem auto;
  }

  @media (max-width: 480px) {
    height: 200px;
    margin: 1rem auto;
  }
`;
