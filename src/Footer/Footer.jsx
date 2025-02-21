import Button from "../components/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__header">
        <div className="footer__header-frame">
          <span className="footer__subtitle">Contact</span>
          <h2 className="footer__title">Send me a message</h2>
          <span className="footer__top-left-corner"></span>
          <span className="footer__top-right-corner"></span>
          <span className="footer__bottom-left-corner"></span>

          <span className="footer__bottom-right-corner"></span>
          <span className="footer__bottom-left-corner-outside"></span>
        </div>
      </div>
      <Button className="contact-btn" href="mailto:evelyn.m.bart@gmail.com">
        Email me
      </Button>

      <br />
      <div className="atmosphere" />
      <div className="planet" />
      <section className="copyright">
        <div className="faint-border" />
        <section className="recap">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/evelyn-bart-9000000000/">
              LinkedIn
            </a>
            <a href="https://github.com/evelyn-bart">GitHub</a>
            <a href="../Evelyn Bart 2025 Resume copy.pdf" download>
              Resume
            </a>
          </div>
          <div className="recap-text">
            <nav className="footer__nav">
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </section>
        &copy; 2025 Evelyn Bart. All rights reserved.
      </section>
    </section>
  );
};

export default Footer;
