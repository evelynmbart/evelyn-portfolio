import "./Think.css";

const Think = () => {
  return (
    <section className="think">
      {/* <header className="hero__header">
        <nav className="hero__nav">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </header> */}
      <div className="think__text">
        <h1>Think</h1>
        <p className="think__description">
          A quiz/trivia app built to test and sharpen your trivia skills
        </p>
        <div className="think__technologies">
          <span>TypeScript</span>
          <span>React</span>
        </div>
      </div>

      <article className="think__content">
        <h2>Building Think: A Trivia App Born from Redemption</h2>
        <p>
          Think was born out of equal parts embarrassment and inspiration. After
          a particularly rough performance at a friend&apos;s trivia night, I
          knew I needed to redeem myself. Trivia had always seemed like a fun
          challenge, but that night made me realize just how much I had to
          learn. At the same time, I wanted a way to practice without the
          distractions and frustrations I encountered when I downloaded Trivia
          Crack. While it&apos;s a great game, the overwhelming number of ads
          and the tutorial&apos;s length pulled me away from the experience I
          actually wanted—quick, engaging trivia without the fluff. tutorial’s
          length pulled me away from the experience I actually wanted—quick,
          engaging trivia without the fluff.
        </p>
        <p>
          So, I set out to build Think, a trivia app focused on simplicity,
          speed, and an ad-free experience. This project was the perfect
          opportunity to sharpen my TypeScript skills and push my front-end
          design abilities. I wanted the UI to be clean and intuitive,
          minimizing distractions while keeping the gameplay smooth. From the
          start, I emphasized responsive design, ensuring that Think worked
          seamlessly on both mobile and desktop. I also explored different ways
          to structure quiz logic efficiently, balancing performance with a
          dynamic and enjoyable experience.
        </p>
        <div className="think__image-placeholder">
          {/* Image 2 will go here */}
        </div>
        <p>
          One of the most rewarding challenges was crafting a
          question-generation system that felt both fair and unpredictable. I
          experimented with different ways to source and categorize questions
          while implementing a scoring system that rewarded consistency and
          quick thinking. The result? A trivia app that not only helped me
          sharpen my knowledge but also reinforced my confidence as a developer.
          Think became more than just a project—it was a testament to learning
          through building, and, of course, my personal redemption in the world
          of trivia.
        </p>
      </article>
    </section>
  );
};

export default Think;
