import "./App.css";
import { CodeObjectInspector } from "./components/CodeObjectInspector";

function App() {
  const aboutMe = {
    name: "Evelyn Bart",
    title: "Frontend Developer",
    email: "evelyn.m.bart@gmail.com",
    resume: "Click to see my resume",
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
    ],
    professionalLinks: ["Github", "Linkedin"],
    hobbies_interests: [
      "Rock Climbing",
      "3D Printing",
      "Crafting",
      "Muay Thai",
      "Desserts",
      "Board Games",
      "Valheim",
    ],
  };

  const linkConfig = {
    valueLinks: {
      Mappi: "https://mappi.levelynup.com",
      Gridddle: "https://gridddle.levelynup.com",
      EBBlog: "https://ebblog.levelynup.com/",
      Markit: "https://markit.levelynup.com/",
      "Pup Progress": "https://pup-progress.levelynup.com/",
      "Cart Compare": "https://cart-compare.levelynup.com/",
      Think: "https://think.levelynup.com/",
      "Home Cooked": "https://home-cooked.levelynup.com/",
      "Last Meals": "https://last-meals.levelynup.com/",
      Farkle: "https://farkle.levelynup.com/",
      "Jaipur Score": "https://jaipur-score.levelynup.com/",
      Pomodoro: "https://pomodoro.levelynup.com/",
      "Hole-in-One": "https://hole-in-one.levelynup.com/",
      Github: "https://github.com/evelynmbart",
      Linkedin: "https://www.linkedin.com/in/evelyn-bart-a469a4288",
    },
    emailFields: ["email"],
    fieldLinks: {
      resume: {
        href: "/EvelynBart_Resume.pdf",
        download: "EvelynBart_Resume.pdf",
      },
    },
  };

  return (
    <CodeObjectInspector
      data={aboutMe}
      variableName="aboutMe"
      initialExpandDepth={1}
      showLineNumbers={true}
      linkConfig={linkConfig}
    />
  );
}

export default App;
