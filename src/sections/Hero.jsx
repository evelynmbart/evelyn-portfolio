import styled, { keyframes } from "styled-components";
import About from "./About";
import Projects from "./Projects";

const Hero = () => {
  return (
    <>
      <HeroSection>
        <Header>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </Header>

        <Main>
          <Left>
            <Title>Hi, I&apos;m Evelyn Bart, a frontend web developer.</Title>
            <Subtitle>
              I&apos;m so <Span>e</Span>
              <Span>x</Span>
              <Span>c</Span>
              <Span>i</Span>
              <Span>t</Span>
              <Span>e</Span>
              <Span>d</Span> that you&apos;re here!
            </Subtitle>
            <ButtonContainer>
              <ResumeButton
                href="../Evelyn Bart 2025 Resume copy.pdf"
                alt="Download my resume!"
                download
              >
                Check out my resume
              </ResumeButton>
              <ResumeButton secondary href="mailto:evelyn.m.bart@gmail.com">
                Let's connect!
              </ResumeButton>
            </ButtonContainer>
          </Left>
          <Right></Right>
        </Main>

        <Footer>
          <ConveyorBelt>
            <ConveyorContent>
              {[1, 2, 3, 4, 5].map((_) => {
                return (
                  <>
                    <SkillItem>
                      <img src="../skill_icons/html.png" alt="HTML Logo " />
                      HTML
                    </SkillItem>
                    <SkillItem>
                      <img src="../skill_icons/css.png" alt="CSS Logo" />
                      CSS
                    </SkillItem>
                    <SkillItem>
                      <img
                        src="../skill_icons/javascript.png"
                        alt="JavaScript Logo"
                      />
                      JavaScript
                    </SkillItem>
                    <SkillItem>
                      <img src="../skill_icons/react.png" alt="React Logo" />
                      React
                    </SkillItem>
                    <SkillItem>
                      <img
                        src="../skill_icons/typescript.png"
                        alt="TypeScript Logo"
                      />
                      TypeScript
                    </SkillItem>
                    <SkillItem>
                      <img src="../skill_icons/node.png" alt="Node.js Logo" />
                      Node.js
                    </SkillItem>
                    <SkillItem>
                      <img
                        src="../skill_icons/postgresql.png"
                        alt="PostgreSQL Logo"
                      />
                      PostgreSQL
                    </SkillItem>
                    <SkillItem>
                      <img src="../skill_icons/git.png" alt="Git Logo" />
                      Git
                    </SkillItem>
                    <SkillItem>
                      <img
                        src="../skill_icons/tailwind.png"
                        alt="Tailwind Logo"
                      />
                      Tailwind
                    </SkillItem>
                  </>
                );
              })}
            </ConveyorContent>
          </ConveyorBelt>
        </Footer>
      </HeroSection>
      <About />
      <Projects />
    </>
  );
};

export default Hero;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: rgb(19, 19, 19);
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  box-sizing: border-box;
  z-index: 100;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    height: fit-content;
    width: 100vw;
  }
`;

const Header = styled.header`
  min-height: 40px;
  padding: 1rem 2rem;
  background-color: rgb(19, 19, 19);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgb(119, 119, 119);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  @media (max-width: 480px) {
    display: flex;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 1.1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    font-size: 1rem;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const Footer = styled.footer`
  min-height: 80px;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-top: 1px solid rgb(119, 119, 119);

  @media (max-width: 768px) {
    min-height: 60px;
  }
`;

const ConveyorBelt = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const ConveyorContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  animation: ${scroll} 20s linear 1s infinite;
  white-space: nowrap;
`;

const SkillItem = styled.span`
  color: white;
  font-size: 1.2rem;
  padding: 0 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Left = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;
  border-right: 1px solid rgb(119, 119, 119);
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgb(119, 119, 119);
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const ResumeButton = styled.a`
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
  position: relative;
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
    width: 180px;
    font-size: 0.9rem;
    padding: 0.8rem 1rem;
  }
`;

const Right = styled.div`
  width: 65%;

  @media (max-width: 1024px) {
    width: 100%;
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.3;
  color: white;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: white;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
  & span:nth-child(2) {
    animation-delay: 0.1s;
  }
  & span:nth-child(3) {
    animation-delay: 0.2s;
  }
  & span:nth-child(4) {
    animation-delay: 0.3s;
  }
  & span:nth-child(5) {
    animation-delay: 0.4s;
  }
  & span:nth-child(6) {
    animation-delay: 0.5s;
  }
  & span:nth-child(7) {
    animation-delay: 0.6s;
  }
`;

const Span = styled.span`
  position: relative;
  color: var(--primary-color);
  font-size: 2.3rem;
  display: inline-block;
  animation: wave 1.2s ease-in-out infinite alternate;
  background: linear-gradient(to bottom, var(--primary-color) 30%, white 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
