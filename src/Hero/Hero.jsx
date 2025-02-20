import Projects from "../Projects/Projects";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <header className="hero__header">
          <nav className="hero__nav">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main className="hero__main">
          <div className="hero__left">
            <h1 className="hero__title">
              Hi, I&apos;m Evelyn Bart, a frontend web developer. I&apos;m so
              excited that you&apos;re here!
            </h1>
            {/* <p className="hero__bio">
              New to the game and hungry for impactful opportunities. I&apos;m
              fully self-taught and make up for my limited experience with
              curiosity, adaptability, and determination. My biggest passion is
              for developing intentional, accessible, and memorable React web
              apps. Let&apos;s work together!
            </p> */}
            <a
              className="a-btn"
              href="../Evelyn Bart 2025 Resume copy.pdf"
              alt="Download my resume!"
              download
            >
              Check out my resume
            </a>
          </div>
          <div className="hero__right"></div>
        </main>

        <footer className="hero__footer">
          <div className="conveyor-belt">
            <div className="conveyor-belt__content">
              {[1, 2, 3, 4, 5].map(() => {
                return (
                  <>
                    <span>
                      <img src="../skill_icons/html.png" alt="HTML Logo " />
                      HTML
                    </span>
                    <span>
                      <img src="../skill_icons/css.png" alt="CSS Logo" />
                      CSS
                    </span>
                    <span>
                      <img
                        src="../skill_icons/javascript.png"
                        alt="JavaScript Logo"
                      />
                      JavaScript
                    </span>
                    <span>
                      <img src="../skill_icons/react.png" alt="React Logo" />
                      React
                    </span>
                    <span>
                      <img
                        src="../skill_icons/typescript.png"
                        alt="TypeScript Logo"
                      />
                      TypeScript
                    </span>
                    <span>
                      <img src="../skill_icons/node.png" alt="Node.js Logo" />
                      Node.js
                    </span>
                    <span>
                      <img
                        src="../skill_icons/postgresql.png"
                        alt="PostgreSQL Logo"
                      />
                      PostgreSQL
                    </span>
                    <span>
                      <img src="../skill_icons/git.png" alt="Git Logo" />
                      Git
                    </span>
                    <span>
                      <img
                        src="../skill_icons/tailwind.png"
                        alt="Tailwind Logo"
                      />
                      Tailwind
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        </footer>
      </section>
      <Projects />
    </>
  );
};

export default Hero;
