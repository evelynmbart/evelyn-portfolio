// Hero.js
import { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  const updateHeroSize = () => {
    if (heroRef.current) {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      if (windowWidth > 600) {
        heroRef.current.style.height = `${windowHeight - 40}px`; // 40px for the border (20px * 2)
        heroRef.current.style.width = `${windowWidth - 40}px`; // 40px for the border (20px * 2)
      }
    }
  };

  useEffect(() => {
    updateHeroSize();

    window.addEventListener("resize", updateHeroSize);

    return () => {
      window.removeEventListener("resize", updateHeroSize);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <header className="hero__header">
        <nav className="hero__nav">
          <a href="/page-a">Page A</a>
          <a href="/page-b">Page B</a>
          <a href="/page-c">Page C</a>
        </nav>
      </header>

      <main className="hero__main">
        <div className="hero__left">
          <h1 className="hero__title">
            Hi, I&apos;m Evelyn Bart, a frontend web developer. I&apos;m so
            excited that you&apos;re here.
          </h1>
          <p className="hero__bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div
          className="hero__right"
          style={{ border: "1px solid green" }}
        ></div>
      </main>

      <footer className="hero__footer">
        <div className="conveyor-belt">
          <div className="conveyor-belt__content">
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <>
                  <span>Sample Skill 1</span>
                  <span>Sample Skill 2</span>
                  <span>Sample Skill 3</span>
                  <span>Sample Skill 4</span>
                  <span>Sample Skill 5</span>
                </>
              );
            })}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Hero;
