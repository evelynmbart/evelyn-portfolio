import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../components/Post";
import { BLOG_POSTS, funFacts } from "../components/posts";

const About = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

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

  const handlePrevious = () => {
    setCurrentQuote(prev => (prev === 0 ? validFunFacts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentQuote(prev => (prev === validFunFacts.length - 1 ? 0 : prev + 1));
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

      <FunFactsCarousel>
        <CarouselButton
          onClick={handlePrevious}
          disabled={currentQuote === 0}
          aria-label="Previous quote"
        >
          ←
        </CarouselButton>
        <CarouselContent>
          {validFunFacts.map((fact, index) =>
            <CarouselQuote
              key={fact.id}
              className={index === currentQuote ? "active" : ""}
            >
              {fact.quote}
            </CarouselQuote>
          )}
        </CarouselContent>
        <CarouselButton
          onClick={handleNext}
          disabled={currentQuote === validFunFacts.length - 1}
          aria-label="Next quote"
        >
          →
        </CarouselButton>
      </FunFactsCarousel>

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
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  margin: 0 auto;
  padding: 4rem 0;
  max-width: 1400px;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const HorizontalTimelineBox = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 2rem 4rem;
  min-height: 300px;
`;

const TimelineArrow = styled.span`
  font-size: 2rem;
  color: var(--primary-color);
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 4rem 0;
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

const FunFactsCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 650px;
  margin: 0 auto 4rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  perspective: 1000px;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 2rem;
    perspective: 800px;
  }
`;

const CarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0 1rem;
  transform-style: preserve-3d;

  @media only screen and (max-width: 768px) {
    height: 180px;
  }
`;

const CarouselQuote = styled.p`
  position: absolute;
  width: 60%;
  margin: 0 70px;
  text-align: center;
  backface-visibility: hidden;
  transform-origin: center center -200px;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px;
  background: var(--card-bg-color);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: rotateY(-180deg) translateZ(200px);

  &.active {
    opacity: 1;
    transform: rotateY(0deg) translateZ(200px);
  }

  &.active ~ & {
    transform: rotateY(180deg) translateZ(200px);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
    transform-origin: center center -150px;
  }
`;

const CarouselButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--primary-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  z-index: 2;
  text-shadow: 0 0 10px rgba(var(--primary-color-rgb), 0.3);

  &:hover:not(:disabled) {
    color: var(--text-color);
    transform: scale(1.1);
    text-shadow: 0 0 20px rgba(var(--primary-color-rgb), 0.5);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--primary-color);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--text-color);
    text-shadow: none;
  }
`;