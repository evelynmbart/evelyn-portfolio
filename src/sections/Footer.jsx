import styled from "styled-components";
import Button from "../components/Button";

const Footer = () => {
  return (
    <FooterSection id="contact">
      <Header>
        <HeaderFrame>
          <Subtitle>Contact</Subtitle>
          <Title>Send me a message</Title>
          <TopLeftCorner />
          <TopRightCorner />
          <BottomLeftCorner />
          <BottomRightCorner />
          <BottomLeftCornerOutside />
        </HeaderFrame>
      </Header>
      <Button className="contact-btn" href="mailto:evelyn.m.bart@gmail.com">
        Email me
      </Button>

      <br />
      <Atmosphere />
      <Planet />
      <Copyright>
        <FaintBorder />
        <Recap>
          <SocialLinks>
            <a href="https://www.linkedin.com/in/evelyn-bart-9000000000/">
              LinkedIn
            </a>
            <a href="https://github.com/evelyn-bart">GitHub</a>
            <a href="../Evelyn Bart 2025 Resume copy.pdf" download>
              Resume
            </a>
          </SocialLinks>
          <div>
            <Nav>
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </Nav>
          </div>
        </Recap>
        &copy; 2025 Evelyn Bart. All rights reserved.
      </Copyright>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.section`
  width: 100%;
  height: 760px;
  background-color: rgb(19, 19, 19);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0 3rem 0;
`;

const HeaderFrame = styled.div`
  position: relative;
  max-width: 400px;
  padding: 2rem 8rem;
  text-align: center;
`;

const Corner = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
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
`;

const BottomRightCorner = styled(Corner)`
  bottom: 0px;
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
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  color: white;
`;

const FaintBorder = styled.div`
  height: 1px;
  margin: 0 10rem;
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
`;

const Recap = styled.section`
  margin: 0 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a:hover {
    color: var(--primary-color);
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
`;
