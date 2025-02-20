import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__header">
        <div className="footer__header-frame">
          <span className="footer__subtitle">Contact</span>
          <h2 className="footer__title">Get in touch with me</h2>
          <span className="footer__top-left-corner"></span>
          <span className="footer__top-right-corner"></span>
          <span className="footer__bottom-left-corner"></span>

          <span className="footer__bottom-right-corner"></span>
          <span className="footer__bottom-left-corner-outside"></span>
        </div>
      </div>
      <div className="footer__contact-btn">
        <a href="mailto:evelyn.m.bart@gmail.com" className="contact-btn">
          Email
        </a>
      </div>

      <br />
      <div className="atmosphere" />
      <div className="planet" />
      <section className="copyright">
        <div className="faint-border" />
        &copy; 2025 Evelyn Bart
      </section>
    </section>
  );
};

export default Footer;
