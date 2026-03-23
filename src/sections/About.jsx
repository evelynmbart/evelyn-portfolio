import { useState } from "react";
import "../App.css";
export const About = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectLinksMap = {
    mappi: "https://mappi.levelynup.com",
    gridddle: "https://gridddle.levelynup.com",
    ebblog: "https://ebblog.levelynup.com/",
    markit: "https://markit.levelynup.com/",
    pup_progress: "https://pup-progress.levelynup.com/",
    cart_compare: "https://cart-compare.levelynup.com/",
    think: "https://think.levelynup.com/",
    home_cooked: "https://home-cooked.levelynup.com/",
    last_meals: "https://last-meals.levelynup.com/",
    farkle: "https://farkle.levelynup.com/",
    jaipur_score: "https://jaipur-score.levelynup.com/",
    pomodoro: "https://pomodoro.levelynup.com/",
    hole_in_one: "https://hole-in-one.levelynup.com/",
  };

  const aboutMe = {
    name: "Evelyn Bart",
    title: "Frontend Developer",
    email: "evelyn.m.bart@gmail.com",
    resume: "/EvelynBart_Resume.pdf",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Git",
    ],
    projects: [
      "Mappi",
      "Gridddle",
      "EBBlog",
      "Markit",
      "Pup Progress",
      "Cart Compare",
      "Think",
      "Home Cooked",
      "Last Meals",
      "Farkle",
      "Jaipur Score",
      "Pomodoro",
      "Hole-in-One",
      "ur mom",
    ],
    hobbies_interests: [
      "Rock Climbing",
      "3D Printing",
      "Crochet",
      "Muay Thai",
      "Desserts",
    ],
    professionalLinks: ["Github", "Linkedin"],
    // imgs: ['/hero-images/IMG_0685.jpg', '/hero-images/IMG_5026.JPG', '/hero-images/raleigh.jpg', '/hero-images/IMG_0050.JPG', '/hero-images/xmas.jpg', '/hero-images/IMG_7454.JPG'],
  };

  // Map social names to URLs for correct links
  const professionalLinksMap = {
    github: "https://github.com/evelynmbart",
    linkedin: "https://www.linkedin.com/in/evelyn-bart-a469a4288",
  };

  // RENDER PROJECT LINKS (styled as for professionalLinks)
  const renderProjectsArray = (arr) => {
    const visibleProjects = showAllProjects ? arr : arr.slice(0, 6);
    const hasMore = arr.length > 6;

    return (
      <>
        <span className="bracket">[</span>
        {visibleProjects.map((proj, idx) => {
          const url = projectLinksMap[proj];
          const isLast = idx === visibleProjects.length - 1;
          return (
            <span key={proj}>
              <a
                className="value"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                "{proj}"
              </a>
              {!isLast || hasMore ? ", " : ""}
            </span>
          );
        })}
        {hasMore && (
          <span
            className="show-more"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? `"show less"` : `show more...`}
          </span>
        )}
        <span className="bracket">]</span>
      </>
    );
  };

  // CREATE SOCIAL LINKS -- show name but link to actual social
  const renderLinksArray = (arr) => (
    <>
      <span className="bracket">[</span>
      {arr.map((link, idx) => {
        const linkUrl =
          professionalLinksMap[link] ||
          (link.startsWith("https") ? link : `mailto:${link}`);
        return (
          <span key={link}>
            <a
              className="value"
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              "{link}"
            </a>
            {idx < arr.length - 1 ? ", " : ""}
          </span>
        );
      })}
      <span className="bracket">]</span>
    </>
  );

  // CREATE EMAIL LINK
  const renderEmail = (email) => (
    <a
      className="value"
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      "{email}"
    </a>
  );

  return (
    <main>
      <p className="object">
        <span style={{ color: "var(--pastel-purple)" }}>const </span>
        aboutMe = <span className="bracket">{"{"}</span>
        {Object.entries(aboutMe).map(([key, value]) => (
          <div key={key} className="line">
            <span className="key">{key}</span>
            <span>: </span>
            <span className="value">
              {key === "projects" && Array.isArray(value) ? (
                renderProjectsArray(value)
              ) : key === "professionalLinks" ? (
                renderLinksArray(value)
              ) : key === "email" ? (
                renderEmail(value)
              ) : Array.isArray(value) ? (
                <>
                  <span className="bracket">[</span>
                  {value.map((v) => `"${v}"`).join(", ")}
                  <span className="bracket">]</span>
                </>
              ) : typeof value === "string" ? (
                `"${value}"`
              ) : (
                String(value)
              )}
            </span>
            <span>,</span>
          </div>
        ))}
        <span className="bracket">{"}"}</span>
        <span className="cursor">|</span>
      </p>
    </main>
  );
};
