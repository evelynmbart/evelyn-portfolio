import "./PupProgress.css";

const PupProgress = () => {
  return (
    <section className="pup-progress">
      <div className="pup-progress__text">
        <h1>pup-progress</h1>
        <p className="pup-progress__description">
          A quiz/trivia app built to test and sharpen your trivia skills
        </p>
        <div className="pup-progress__technologies">
          <span>TypeScript</span>
          <span>React</span>
        </div>
      </div>

      <article className="pup-progress__content">
        <h2>Project Overview</h2>
        <p>
          pup-progress was developed as a modern approach to trivia gaming,
          designed to make learning fun and engaging while challenging users to
          expand their knowledge across various categories.
        </p>

        <h2>Technical Implementation</h2>
        <p>
          Built using React and TypeScript, pup-progress leverages modern web
          technologies to create a smooth and interactive user experience. The
          application uses React Router for seamless navigation and Redux for
          state management, ensuring consistent data flow throughout the app.
        </p>

        <p>
          One of the key technical challenges was implementing a robust scoring
          system that could handle various question types while maintaining
          accurate statistics across gaming sessions. This required careful
          consideration of state management and data persistence.
        </p>

        <div className="pup-progress__image-placeholder">
          {/* Image 2 will go here */}
        </div>

        <h2>Development Challenges</h2>
        <p>
          The main challenge in building pup-progress was creating an intuitive
          user interface that could accommodate different question formats while
          maintaining consistency in the user experience. This required
          implementing flexible component architecture and careful consideration
          of responsive design principles.
        </p>

        <p>
          Another significant challenge was optimizing performance while
          handling large sets of question data. This led to implementing
          efficient data loading strategies and caching mechanisms to ensure
          smooth gameplay even with extensive question banks.
        </p>

        <div className="pup-progress__image-placeholder">
          {/* Image 3 will go here */}
        </div>

        <h2>Learning Outcomes</h2>
        <p>
          Developing pup-progress significantly improved my skills in TypeScript
          and React, particularly in areas of state management and component
          architecture. It also provided valuable experience in handling user
          authentication, managing application state, and implementing
          responsive design patterns.
        </p>
      </article>
    </section>
  );
};

export default PupProgress;
