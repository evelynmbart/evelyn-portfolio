import styled, { keyframes } from "styled-components";
import Button from "../components/Button";
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
            <Subtitle> I&apos;m so excited that you&apos;re here!</Subtitle>
            <ResumeButton
              href="../Evelyn Bart 2025 Resume copy.pdf"
              alt="Download my resume!"
              download
            >
              Check out my resume
            </ResumeButton>
            <Button
              className="contact-btn"
              href="mailto:evelyn.m.bart@gmail.com"
            >
              Let's connect!
            </Button>
          </Left>
          <Right></Right>
        </Main>

        <Footer>
          <ConveyorBelt>
            <ConveyorContent>
              {[1, 2, 3, 4, 5].map(() => {
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

  @media (max-width: 768px) {
    margin: 0px;
    border-radius: 0;
    height: 100vh;
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
`;

const Nav = styled.nav``;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 1.1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
`;

const Footer = styled.footer`
  min-height: 80px;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-top: 1px solid rgb(119, 119, 119);
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
`;

const Left = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  padding: 2rem 1rem;
  border-right: 1px solid rgb(119, 119, 119);
  align-items: center;
`;

const ResumeButton = styled.a`
  width: 200px;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    var(--secondary-color) 0%,
    var(--primary-color) 100%
  );
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 1.2rem;
  text-align: left;
  text-decoration: none;
  position: relative;

  &:after {
    content: "→";
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    transition: transform 0.4s ease-in-out;
  }

  &:hover:after {
    transform: translateX(50%) translateY(-50%);
  }
`;

const Right = styled.div`
  width: 65%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.3;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
  margin: 0;
  align-self: flex-start;
`;
