import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../components/Post";
import { BLOG_POSTS, funFacts } from "../components/posts";

const MORE =
  [
    "encore!",
    "anotha one",
    "hit me again",
    "more!",
    "keep 'em coming",
    "gimme more",
    "next up",
  ]

const About = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Filter out empty objects from funFacts
  const validFunFacts = funFacts.filter(fact => fact.id);

  useEffect(
    () => {
      const timer = setInterval(() => {
        setCurrentQuote(
          prev => (prev === validFunFacts.length - 1 ? 0 : prev + 1)
        );
      }, 5000); // Change quote every 5 seconds

      return () => clearInterval(timer);
    },
    [validFunFacts.length, currentQuote]
  );

  useEffect(() => {
    if (!validFunFacts[currentFact]?.quote) return;
    
    setIsTyping(true);
    setDisplayText("");
    
    let index = -1;
    const text = validFunFacts[currentFact].quote;
    
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text.charAt(index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 25);

    return () => clearInterval(typingInterval);
  }, [currentFact]);

  const handleNewFact = () => {
    if (!isTyping) {
      setCurrentFact(prev => 
        prev === validFunFacts.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <AboutSection id="about">
      <Header>
        <HeaderFrame>
          <Subtitle>About</Subtitle>
          <Title>
            A little about me and my journey into web development
          </Title>
          <TopLeftCorner />
          <TopRightCorner />
          <TopRightCornerOutside />
          <BottomLeftCorner />
          <BottomRightCorner />
        </HeaderFrame>
      </Header>

      <HorizontalTimelineBox>
        {BLOG_POSTS.map((item, index) => (
          <>
            <Post
              key={item.id}
              date={item.date}
              title={item.title}
              post={item.post}
            />
            {index < BLOG_POSTS.length - 1 && (
              <TimelineArrow>→</TimelineArrow>
            )}
          </>
        ))}
      </HorizontalTimelineBox>

      <TypingSection>
        <TypingContainer>
          <TypingText>
            {displayText}
            <Cursor isTyping={isTyping}>|</Cursor>
            {!isTyping && (
              <span>
                {" "}(<NewFactLink onClick={handleNewFact}>{MORE[currentFact % MORE.length]}</NewFactLink>)
              </span>
            )}
          </TypingText>
        </TypingContainer>
      </TypingSection>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  margin: -40px 0 0;
  padding: 4rem 0;
  width: 100%;
  position: relative;
  z-index: 1;
  background: 
    linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px) 0 0 / 40px 40px,
    linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px) 0 0 / 40px 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 500px;
    z-index: -1;
    background: linear-gradient(to bottom, transparent, var(--background-color));
    pointer-events: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const HorizontalTimelineBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  min-height: 300px;
  max-width: 100%;
  overflow-x: scroll;
`;

const TimelineArrow = styled.span`
  font-size: 2rem;
  color: var(--primary-color);
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const HeaderFrame = styled.div`
  position: relative;
  max-width: 650px;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media only screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
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

const TopRightCornerOutside = styled(Corner)`
  top: -15px;
  right: -15px;
  border-bottom: 2px solid var(--primary-color);
  border-left: 2px solid var(--primary-color);
`;

const BottomRightCorner = styled(Corner)`
  bottom: 0;
  right: 0;
  border-bottom: 2px solid var(--primary-color);
  border-right: 2px solid var(--primary-color);
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  color: var(--text-color);
  background: linear-gradient(45deg, var(--text-color), color-mix(in srgb, var(--primary-color) 60%, black));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TypingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  padding: 0 2rem;
  position: relative;

`;

const TypingContainer = styled.div`
  width: 600px;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1.6;
  padding: 2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  &::after {
    content: '✨ The fun fact machine ✨';
    position: absolute;
    font-size: 0.8rem;
    top: 0;
    transform: translateY(-100%);
    left: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #0066ff 0%, #ff6600 100%);
    opacity: 0.15;
    z-index: -1;
  }
`;

const TypingText = styled.span`
  color: var(--text-color);
`;

const Cursor = styled.span`
  display: inline-block;
  color: var(--primary-color);
  animation: ${props => props.isTyping ? 'none' : 'blink 1s step-end infinite'};
  transform: translateX(-4px) translateY(-2px);
  font-weight: bold;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const NewFactLink = styled.span`
  color: var(--primary-color);
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;