import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection id="contact">
      <Header>
        <HeaderFrame>
          <Subtitle>Contact</Subtitle>
          <Title>Let&apos;s get in touch.</Title>
          <TopLeftCorner />
          <TopRightCorner />
          <BottomLeftCorner />
          <BottomRightCorner />
          <BottomLeftCornerOutside />
        </HeaderFrame>
      </Header>

      <ContactContainer>
        <ContactButton>Contact</ContactButton>
        <ContactLinks>
          <ContactLink href="https://www.linkedin.com/in/evelyn-bart-a469a4288">
            <FaLinkedin />
          </ContactLink>
          <ContactLink href="mailto:evelyn.m.bart@gmail.com">
            <FaEnvelope />
          </ContactLink>
        </ContactLinks>
      </ContactContainer>

      <br />
      <Atmosphere />
      <Planet />
      <Copyright>
        <FaintBorder />
        <Recap>
          <SocialLinks>
            <a href="https://www.linkedin.com/in/evelyn-bart-a469a4288">
              <FaLinkedin size={27} title="LinkedIn" />
            </a>
            <a href="https://github.com/evelynmbart">
              <FaGithub size={27} title="GitHub" />
            </a>
            <a href="../EvelynBartResume2025.pdf" download>
              <FaFilePdf size={27} title="Resume" />
            </a>
          </SocialLinks>
          <div>
            <Nav>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </Nav>
          </div>
        </Recap>
        <CopyrightText>
          &copy; 2025 Evelyn Bart. All rights reserved.
        </CopyrightText>
      </Copyright>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.section`
  width: 100%;
  min-height: 760px;
  background-color: rgb(19, 19, 19);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;

  @media (max-width: 768px) {
    min-height: 600px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0 3rem 0;

  @media (max-width: 768px) {
    margin: 3rem 0 2rem 0;
  }
`;

const HeaderFrame = styled.div`
  position: relative;
  max-width: 400px;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 300px;
  }
`;

const Corner = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const TopLeftCorner = styled(Corner)`
  top: 0;
  left: 0;
  border-top: 2px solid white;
  border-left: 2px solid white;
`;

const TopRightCorner = styled(Corner)`
  top: 0;
  right: 0;
  border-top: 2px solid white;
  border-right: 2px solid white;
`;

const BottomLeftCorner = styled(Corner)`
  bottom: 0;
  left: 0;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
`;

const BottomLeftCornerOutside = styled(Corner)`
  bottom: -15px;
  right: -15px;
  border-top: 2px solid white;
  border-left: 2px solid white;

  @media (max-width: 768px) {
    bottom: -10px;
    right: -10px;
  }
`;

const BottomRightCorner = styled(Corner)`
  bottom: 0;
  right: 0;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContactButton = styled.button.attrs({ className: "contact-button" })`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  transform: rotateX(0);

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactLinks = styled.div.attrs({ className: "contact-links" })`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  transform: rotateX(-180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  pointer-events: none;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    pointer-events: auto;
  }
`;

const ContactContainer = styled.div`
  position: relative;
  perspective: 1000px;
  width: 200px;
  height: 50px;

  &:hover {
    ${ContactButton} {
      transform: rotateX(180deg);
    }
    ${ContactLinks} {
      transform: rotateX(0);
      pointer-events: auto;
    }
  }

  @media (max-width: 768px) {
    perspective: none;
    height: auto;
    margin: 1rem 0;

    &:hover {
      ${ContactLinks} {
        transform: none;
      }
    }
  }
`;

const ContactLink = styled.a`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FaintBorder = styled.div`
  height: 1px;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.25) 40%,
    hsla(0, 0%, 100%, 0.25) 60%,
    hsla(0, 0%, 100%, 0)
  );
`;

const Copyright = styled.section`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    margin-top: 2rem;
  }
`;

const Recap = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }

  a:hover {
    color: var(--primary-color);
  }
`;

const CopyrightText = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 0.9rem;
  }
`;

const Atmosphere = styled.div`
  position: absolute;
  height: 2400px;
  width: 1800px;
  left: 50%;
  bottom: -2000px;
  transform: translateX(-50%) translate3d(0px, 0px, 0px);
  background: conic-gradient(var(--secondary-color), var(--primary-color));
  border-radius: 9999px;
  filter: blur(144px);

  @media (max-width: 768px) {
    width: 150%;
    height: 200%;
  }
`;

const Planet = styled.div`
  position: absolute;
  height: 2400px;
  width: 1800px;
  left: 50%;
  bottom: -2000px;
  transform: translateX(-50%);
  background: rgb(19, 19, 19);
  border-radius: 9999px;

  @media (max-width: 768px) {
    width: 150%;
    height: 200%;
  }
`;
