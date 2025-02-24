import { useEffect, useState } from "react";
import Post from "../components/Post";
import { BLOG_POSTS, funFacts } from "../components/posts";
import "./About.css";

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
    <section className="about" id="about">
      <div className="about__header">
        <div className="about__header-frame">
          <span className="about__subtitle">About</span>
          <h2 className="about__title">
            A little about me and my journey into web development
          </h2>
          <span className="about__top-left-corner" />
          <span className="about__top-right-corner" />
          <span className="about__top-right-corner-outside" />
          <span className="about__bottom-left-corner" />
          <span className="about__bottom-right-corner" />
        </div>
      </div>

      <div className="fun-facts-carousel">
        <button
          className="carousel-button carousel-button--prev"
          onClick={handlePrevious}
          disabled={currentQuote === 0}
          aria-label="Previous quote"
        >
          ←
        </button>
        <div className="carousel-content">
          {validFunFacts.map((fact, index) =>
            <p
              key={fact.id}
              className={`carousel-quote ${index === currentQuote
                ? "active"
                : ""}`}
            >
              {fact.quote}
            </p>
          )}
        </div>
        <button
          className="carousel-button carousel-button--next"
          onClick={handleNext}
          disabled={currentQuote === validFunFacts.length - 1}
          aria-label="Next quote"
        >
          →
        </button>
      </div>

      <div className="horizontal-timeline-box">
        {BLOG_POSTS.map((item, index) => (
          <>
            <Post
              key={item.id}
              date={item.date}
              title={item.title}
              post={item.post}
            />
            {index < BLOG_POSTS.length - 1 && (
              <span className="timeline-arrow">→</span>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default About;
