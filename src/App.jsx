import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ProjectPage from "./sections/ProjectPage";

const PROJECTS = [
  {
    id: 1,
    mainImage: "../project-post-imgs/think0.png",
    name: "Think",
    title: "Sharpen Your Trivia Skills",
    description:
      "Think is a trivia quiz app designed to test and enhance your general knowledge.",
    technologies: ["TypeScript", "React"],
    firstP:
      "Trivia lovers often find themselves searching for new ways to challenge their knowledge. Think was built with that in mind, offering an interactive experience that keeps users engaged. The app randomly generates questions to ensure a fresh experience every time.",
    secondP:
      "Built using TypeScript and React, Think ensures a seamless and responsive user interface. Users can answer questions in various categories and track their progress over time. The intuitive design allows for a smooth and engaging experience. The use of TypeScript ensures type safety and scalability for future expansions.",
    thirdP:
      "Additionally, the app offers hints and explanations to help users learn from their mistakes. This makes Think not just a quiz app but also a learning tool.",
    image: "../project-post-imgs/think2.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/751a1d63fcf44a49a12123eaf6a810b1?sid=d3252d38-0130-44c6-9dd7-83c7350f36b4",
    shareLink:
      "https://www.loom.com/share/751a1d63fcf44a49a12123eaf6a810b1?sid=6b25c1b3-f3e8-4fa8-9a80-fe71fffa56cc",
    demoImage: "../demo-thumbnails/thinkdemo.png",
  },
  {
    id: 2,
    mainImage: "../project-post-imgs/pup7.png",
    name: "Pup Progress",
    title: "Train Your Dog with Ease",
    description:
      "Pup Progress is a comprehensive dog training app that helps owners train their pets effectively.",
    technologies: ["TypeScript", "React"],
    firstP:
      "Training a dog can be a challenging task, but Pup Progress simplifies the process. It offers a structured way to teach new tricks through progressive learning. The app provides two modes: chapter-based learning and freestyle training. This ensures that both beginners and experienced trainers can benefit from its features.",
    secondP:
      "Using TypeScript and React, Pup Progress delivers a clean and organized interface. The app categorizes tricks based on difficulty level, making it easy to pick up where you left off. Users can track their dog's progress over time and revisit past lessons as needed. The intuitive design makes navigation effortless for all users.",
    image: "../project-post-imgs/pup1.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/8349bf0a80e6429d8a057cefbbff9dee?sid=a868ac5d-e99f-4e00-875e-2c553b8f1429",
    shareLink:
      "https://www.loom.com/share/8349bf0a80e6429d8a057cefbbff9dee?sid=62a638e3-27fe-42dd-8f59-cf88c4b42392",
    demoImage: "../demo-thumbnails/pupdemo.gif",
  },
  {
    id: 3,
    mainImage: "../project-post-imgs/pom4.png",
    name: "Pomodoro",
    title: "Boost Your Productivity with Pomodoro",
    description:
      "A Pomodoro-style timer combined with a task list to help users stay focused and efficient.",
    technologies: ["JavaScript", "React"],
    firstP:
      "Time management is crucial for productivity, and Pomodoro offers an effective way to structure your work. The app follows the Pomodoro technique, breaking tasks into focused time blocks with short breaks in between. This approach helps maintain concentration and prevents burnout. Users can customize session lengths to match their workflow.",
    secondP:
      "Built with TypeScript and React, Pomodoro provides a smooth and visually appealing interface. The task list feature allows users to organize their workload efficiently. The responsive design ensures usability across different devices.",
    image: "../project-post-imgs/pom2.png",
    siteLink: "https://pomodoro.levelynup.com/",
    githubLink: "https://github.com/evelynmbart/pomodoro",
    embedLink:
      "https://www.loom.com/embed/5da16a72f9f84765939704196f97177e?sid=66304248-a088-4be3-b301-9d615862c9cb",
    shareLink:
      "https://www.loom.com/share/5da16a72f9f84765939704196f97177e?sid=be0083ea-d7b6-46c7-a277-bd9190fc68dd",
    demoImage: "../demo-thumbnails/pomodorodemo.gif",
  },
  {
    id: 4,
    mainImage: "../project-post-imgs/river0.png",
    name: "RiverFlow",
    title: "Kayak Smarter with Real-Time Data",
    description:
      "RiverFlow provides real-time data on river rapids in the Northeast, built for kayakers.",
    technologies: ["JavaScript", "React"],
    firstP:
      "For kayakers, knowing the conditions of a river before heading out is crucial. RiverFlow gathers data from multiple sources to provide real-time rapid conditions. This helps whitewater enthusiasts make informed decisions. Whether you're an expert or a beginner, having this data at your fingertips can enhance safety and performance.",
    secondP:
      "Developed using JavaScript and React, RiverFlow ensures a fast and reliable experience. The app features an intuitive interface where users can quickly check rapid classifications. Data updates dynamically to reflect changing river conditions, making it an essential tool for planning trips.",
    thirdP:
      "With a user-friendly design, users can bookmark favorite river spots for easy access. The app was inspired by my brother, a whitewater kayak instructor, who needed an efficient way to check rapid conditions before leading groups.",
    image: "../project-post-imgs/river1.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/cd60cb7f128345af852b3dffc39118f0?sid=544359e7-ea1c-4321-bdc0-b15487b43dd6",
    shareLink:
      "https://www.loom.com/share/cd60cb7f128345af852b3dffc39118f0?sid=44e20cfc-2d09-4831-9d93-30fe9c4d021f",
    demoImage: "../demo-thumbnails/riverdemo.gif",
  },
  {
    id: 5,
    mainImage: "../project-post-imgs/mark2.png",
    name: "MarkIt",
    title: "All Your Links in One Place",
    description:
      "MarkIt is a hub for your urgent bookmarks, ensuring quick and easy access to frequently visited links.",
    technologies: ["TypeScript", "React"],
    firstP:
      "With so many important links scattered across different apps, MarkIt centralizes them in one convenient location. Users can quickly save and categorize their links, reducing clutter on their home screens. The app is designed to be lightweight and intuitive, ensuring users can find what they need instantly.",
    secondP:
      "Built with TypeScript and React, MarkIt provides a seamless experience across devices. The app includes tagging and search functionalities, allowing users to organize bookmarks efficiently. The ability to pin essential links ensures frequently used websites are always within reach.",
    thirdP:
      "Whether it's news articles, travel information, or reference materials, MarkIt ensures quick access. Its clean design and user-friendly interface make it a must-have tool for digital organization.",
    image: "../project-post-imgs/mark1.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/ad53292ce7f6418b85e074eb102ca6eb?sid=fac70a7f-f43a-4034-b08d-c6e776f60c0e",
    shareLink:
      "https://www.loom.com/share/ad53292ce7f6418b85e074eb102ca6eb?sid=c57732c4-3b88-4ec1-b926-b4615864df24",
    demoImage: "../demo-thumbnails/markitdemo.gif",
  },
  {
    id: 6,
    mainImage: "../project-post-imgs/mappi2.png",
    name: "Mappi",
    title: "Find Your Ideal NYC Neighborhood",
    description:
      "Mappi helps users find the best NYC neighborhoods based on their preferences and essential locations.",
    technologies: ["TypeScript", "React", "Google Maps API"],
    firstP:
      "Choosing the right neighborhood in NYC can be overwhelming. Mappi simplifies this process by allowing users to select key locations they want nearby. Whether it's a gym, dog park, or grocery store, Mappi layers these searches on a map to highlight the best neighborhoods.",
    secondP:
      "Built using TypeScript, React, and Google Maps API, Mappi delivers accurate location data. The interactive map makes it easy to visualize potential living areas. Users can refine their searches and compare different neighborhoods effortlessly.",
    thirdP:
      "Mappi was designed to help people make informed decisions about where to live. It saves time by presenting all necessary data in one place. Whether moving to NYC or just exploring new areas, Mappi is a valuable tool for finding the perfect neighborhood.",
    image: "../project-post-imgs/mappi3.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "https://github.com/evelynmbart/mappi",
    embedLink:
      "https://www.loom.com/embed/8df0a24f844c4d01ae1170dc06655e2b?sid=91ec193c-712a-489b-a3a7-2c87029addb6",
    shareLink:
      "https://www.loom.com/share/8df0a24f844c4d01ae1170dc06655e2b?sid=834cc485-dd8a-4609-81f0-bc1ba1e1f342",
    demoImage: "../demo-thumbnails/mappidemo.gif",
  },

  {
    id: 7,
    mainImage: "../project-post-imgs/last4.png",
    name: "Last Meals",
    title: "Last Meals - Your Favorite Meal Journal",
    description:
      "A digital food journal to log your most favorite meals of the day or year.",
    technologies: ["TypeScript", "React"],
    firstP:
      "Last Meals is designed for food enthusiasts who want to track and reflect on their favorite meals. It's a food journal where users can log meals they've loved, making it easy to look back at their favorites over time. The app helps users organize meals by categories, such as breakfast, lunch, and dinner. It's perfect for food lovers who want to document their culinary experiences.",
    secondP:
      "Built using TypeScript and React, the app ensures a seamless and interactive experience. Users can easily navigate through the app, adding meal details along with dates and meal descriptions. The modern design and responsive layout make it user-friendly across all devices. TypeScript provides the type safety needed for robust meal tracking features.",
    thirdP:
      "What makes Last Meals stand out is its ability to review meals over a certain period, like a month or year. This gives users the chance to track their favorite dishes seasonally or discover recurring meals. Whether you are a chef or a casual foodie, this app can bring joy to those who take pride in their culinary choices. By using it regularly, you can build a rich database of your food adventures.",
    image: "../project-post-imgs/last1.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/aa793fd349e44089ac2b50b9f9fab275?sid=43530566-500f-42da-9ba7-d332de546a38",
    shareLink:
      "https://www.loom.com/share/aa793fd349e44089ac2b50b9f9fab275?sid=5c3ef3f0-9a21-4752-9aa2-756d45fd817a",
    demoImage: "../demo-thumbnails/lastmealsdemo.gif",
  },
  {
    id: 8,
    mainImage: "../project-post-imgs/jaipur5.png",
    name: "Jaipur",
    title: "Jaipur - Online Scorekeeper for Jaipur",
    description:
      "A scorekeeping app designed to simplify the process of tracking scores in the boardgame Jaipur.",
    technologies: ["JavaScript", "React"],
    firstP:
      "Jaipur is a strategic two-player card game where the players compete to earn the most money. The game involves different types of scoring, which can be confusing to keep track of, especially for new players. This app solves that problem by automating the scorekeeping process. Whether you're a beginner or an experienced player, you can focus more on strategy and less on counting scores.",
    secondP:
      "Built using JavaScript and React, the Jaipur scorekeeper offers a simple yet effective way to handle scores. The app displays current scores in real-time, automatically updating as you progress through the game. No need to worry about losing tokens or making manual errors with score tracking. Just enter each player's actions, and the app does the rest.",
    thirdP:
      "With its intuitive design, users can quickly get started without needing a tutorial. The clean interface ensures a smooth experience during gameplay. Jaipur's scorekeeper makes it easier to dive right into the game, allowing players to enjoy their sessions without interruptions. Perfect for fans of the board game who want to keep their focus on the fun rather than on math.",
    image: "../project-post-imgs/jaipur1.png",
    siteLink: "https://jaipur-score.levelynup.com/",
    githubLink: "https://github.com/evelynmbart/jaipur-score",
    embedLink:
      "https://www.loom.com/embed/55959389246243af9874c0d72a8b33ed?sid=c044b419-71f6-4de4-b64f-438e96ece3b8",
    shareLink:
      "https://www.loom.com/share/55959389246243af9874c0d72a8b33ed?sid=5288e883-7d14-4fa0-b073-c19dc22cbfa2",
    demoImage: "../demo-thumbnails/jaipurdemo.gif",
  },
  {
    id: 9,
    mainImage: "../project-post-imgs/homecooked2.png",
    name: "HomeCooked",
    title: "HomeCooked - A Recipe Hub for Your Favorite Meals",
    description:
      "A hub where users can discover, create, and share their favorite recipes.",
    technologies: ["TypeScript", "React"],
    firstP:
      "HomeCooked is a platform designed for anyone who loves to cook and share recipes. Whether you're an experienced chef or a beginner in the kitchen, this app provides a way to store, organize, and explore meals. You can create new recipes, catalog your favorites, and add them to a central hub. The app features an easy-to-use interface for discovering new dishes.",
    secondP:
      "Built with TypeScript and React, HomeCooked provides users with a fast and reliable experience. With advanced search functionality, you can quickly find recipes by name or tag. You can add your own tags to recipes for better organization. The search engine filters meals based on the tags you input, helping you to easily find dishes that match your craving.",
    thirdP:
      "One of the standout features of HomeCooked is its ability to let users contribute new recipes. This creates a growing catalog of meals where users can inspire each other. Whether you're trying to make a new dish or looking for something new to cook, this app connects people through food. With HomeCooked, you'll never run out of meal ideas again.",
    image: "../project-post-imgs/homecooked1.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/160b831f35264a0582ac38eb0be793a8?sid=072c706a-3bd6-4426-b5d3-6235d3863b1a",
    shareLink:
      "https://www.loom.com/share/160b831f35264a0582ac38eb0be793a8?sid=cee86293-5802-4a66-adde-486b8fe99ba8",
    demoImage: "../demo-thumbnails/homecookeddemo.gif",
  },
  {
    id: 10,
    mainImage: "../project-post-imgs/hole3.jpg",
    name: "Hole-in-One",
    title: "Hole-in-One - A Donut-Themed Memory Game",
    description:
      "A fun memory game with a donut theme that challenges your memory and reaction time.",
    technologies: ["JavaScript", "React"],
    firstP:
      "Hole-in-One is a playful and challenging memory game featuring donuts as the central theme. It's one of the first projects I built using React, and it provided a great introduction to component-based development. The game presents players with a grid of cards that must be matched based on memory. Each card is adorned with a cute donut image, adding to the game's charm.",
    secondP:
      "In this game, you need to flip two cards at a time and try to find matching pairs. React helped me create a smooth user experience with responsive elements and quick feedback during gameplay. The use of JavaScript made it easy to handle game logic, including detecting when all pairs are matched.",
    thirdP:
      "This project helped me learn about managing state, handling user interactions, and implementing logic for a card game. Hole-in-One has a simple design, making it accessible for players of all ages. Its donut theme adds a fun and quirky touch to a traditional memory game, making it even more enjoyable. Whether you're looking to sharpen your memory skills or just have fun, Hole-in-One is a perfect game to try.",
    image: "../project-post-imgs/hole1.png",
    siteLink: "https://holeinone.levelynup.com/",
    githubLink: "https://github.com/evelynmbart/Memory-Game",
    embedLink:
      "https://www.loom.com/embed/831b851e26794422ad245e3544ca0a23?sid=3f9cdca5-8395-4c60-a258-8f65e6d4b8a6",
    shareLink:
      "https://www.loom.com/share/831b851e26794422ad245e3544ca0a23?sid=44027376-c0d0-493d-b3c7-ccaf52cc6da7",
    demoImage: "../demo-thumbnails/holedemo.gif",
  },
  {
    id: 11,
    mainImage: "../project-post-imgs/hangman1.png",
    name: "Hangman",
    title: "Hangman - An Online Version of the Classic Game",
    description:
      "An online, interactive version of the traditional Hangman game.",
    technologies: ["TypeScript", "React"],
    firstP:
      "Hangman is a classic word-guessing game that I've recreated using TypeScript and React. It's an interactive version of the traditional game, where players try to guess letters in a hidden word before their chances run out. The app allows users to play Hangman in a fun and user-friendly environment. It automatically tracks your wrong guesses and displays a graphic representation of a hanging figure as you lose turns.",
    secondP:
      "Built with TypeScript for type safety and React for a dynamic interface, Hangman provides a smooth gaming experience. The interface is simple yet visually engaging, and it's easy to understand for new players. You can choose different difficulty levels, making the game suitable for all ages. The app also generates random words for endless gameplay without the need for preparation.",
    thirdP:
      "Playing Hangman on this app is a fun way to improve your vocabulary and spelling skills. The clean design and easy navigation make it an enjoyable game for a quick break or long sessions. This project was a great opportunity to explore user input handling and state management within React. If you love word games, this online version of Hangman will give you hours of entertainment.",
    image: "../project-post-imgs/hangman3.png",
    siteLink: "https://hangman.levelynup.com/",
    githubLink: "https://github.com/evelynmbart/hangman",
    embedLink:
      "https://www.loom.com/embed/051a47c6f4b7496fb86fe3172bf83dd8?sid=e630413a-3ee1-4c7e-995e-6fc7021355b2",
    shareLink:
      "https://www.loom.com/share/051a47c6f4b7496fb86fe3172bf83dd8?sid=616c6982-e05d-4597-8793-4a05338e1489",
    demoImage: "../demo-thumbnails/hangmandemo.gif",
  },
  {
    id: 12,
    mainImage: "../project-post-imgs/grid0.png",
    name: "Gridddle",
    title: "Gridddle - A Pixel Art Daily Challenge",
    description:
      "A pixel art-themed app that challenges users with a daily art prompt.",
    technologies: ["TypeScript", "React"],
    firstP:
      "Gridddle is a unique app that provides a daily pixel art challenge. Every day, users are given a random prompt and three colors to inspire their artwork. The goal is to create a pixel art masterpiece using the colors and ideas provided. It's a fun way to improve your creativity and pixel art skills while being part of a community of fellow artists.",
    secondP:
      "The app lets you post your daily artwork to a feed, where you can see what others have created. Users can log in with their GitHub accounts to share their art easily. Built with TypeScript and React, Gridddle ensures that the app is both responsive and interactive. You can quickly upload and view artwork, making it easy to stay engaged with the daily challenges.",
    thirdP:
      "Gridddle is more than just an art app; it's a community-driven platform for artistic expression. Every day brings a new challenge that encourages users to think outside the box and experiment with pixel art. The daily prompts keep the app fresh and interesting, making it a great tool for practicing and improving your design skills. Whether you're a pixel art expert or a newcomer, Gridddle offers a fun and creative environment.",
    image: "../project-post-imgs/grid5.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "https://github.com/evelynmbart/Gridddle",
    embedLink:
      "https://www.loom.com/embed/4286157e6615442e9b0d59c9843c949c?sid=2d2057fa-81a8-4dec-9c7c-84bf4cb924b7",
    shareLink:
      "https://www.loom.com/share/4286157e6615442e9b0d59c9843c949c?sid=750dadea-0906-4575-8760-8de794444129",
    demoImage: "../demo-thumbnails/griddemo.gif",
  },
  {
    id: 13,
    mainImage: "../project-post-imgs/farkle3.png",
    name: "Farkle",
    title: "Farkle - Online Multiplayer Farkle Game",
    description:
      "An online version of Farkle that automatically tracks your score as you play.",
    technologies: ["TypeScript", "React"],
    firstP:
      "Farkle is a fast-paced dice game where players try to score points by rolling different combinations. This online version brings the game to your browser with the added benefit of automatic score tracking. You can play with friends and easily keep track of who's winning. The app makes the gameplay experience smoother by handling the math, so you can focus on the fun part of the game.",
    secondP:
      "Developed with TypeScript and React, the Farkle game app is built to be both reliable and engaging. The app uses state management to keep track of players' scores and turns. Simply roll the dice, and the app will calculate your score in real-time.",
    thirdP:
      "This app is perfect for people who enjoy playing dice games with friends. It's fast-paced and has a simple interface that lets you focus on the gameplay rather than keeping track of numbers. Farkle is a great choice for casual gaming sessions, whether you're playing with friends or family. The game will keep you on your toes as you try to beat your opponents without rolling a 'farkle'!",
    image: "../project-post-imgs/farkle1.png",
    siteLink: "https://farkle.levelynup.com/",
    githubLink: "https://github.com/evelynmbart/farkle",
    embedLink:
      "https://www.loom.com/embed/39f5d919babb46f281ceb1b1852aa2a2?sid=2b1aa771-161f-4d4b-aa7e-f4e131dcbec5",
    shareLink:
      "https://www.loom.com/share/39f5d919babb46f281ceb1b1852aa2a2?sid=c21c3840-758b-416d-ab77-42aa541ed56e",
    demoImage: "../demo-thumbnails/farkledemo.gif",
  },
  {
    id: 14,
    mainImage: "../project-post-imgs/cycle3.png",
    name: "CycleSync",
    title: "CycleSync - Your Personal Period Tracker",
    description:
      "A period tracking app designed to help you track menstrual cycles with personalized input.",
    technologies: ["TypeScript", "React"],
    firstP:
      "CycleSync is a personal period tracking app that allows you to track your menstrual cycle with custom questions. Unlike traditional period trackers, it lets you log more specific symptoms, moods, and health metrics. This personalization makes it easier to track changes in your cycle and understand your body. The app is designed to be both intuitive and helpful, whether you're looking for basic tracking or more detailed insights.",
    secondP:
      "Developed with TypeScript and React, CycleSync provides a smooth experience on both mobile and desktop. You can log your cycle data easily and keep track of things like moods, energy levels, and physical symptoms. The app gives you the ability to reflect on past cycles and see patterns over time. It's an ideal tool for anyone wanting to understand and manage their reproductive health better.",
    thirdP:
      "CycleSync also helps you predict your next cycle based on your data, which is useful for those planning their schedules or managing symptoms. With its user-centric design, CycleSync is the go-to app for anyone who wants to keep a detailed record of their menstrual health.",
    image: "../project-post-imgs/cycle2.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/8401ae90f9c9454ea4f55e91a97ed4c8?sid=ea821f59-8a55-4488-bafd-dda1c6a44fc8",
    shareLink:
      "https://www.loom.com/share/8401ae90f9c9454ea4f55e91a97ed4c8?sid=e8c7d575-5afc-4fdb-9456-b25f6ef2edcb",
    demoImage: "../demo-thumbnails/cycledemo.gif",
  },
  {
    id: 15,
    mainImage: "../project-post-imgs/cart2.png",
    name: "CartCompare",
    title: "CartCompare - Compare Grocery Prices Across Stores",
    description:
      "An app that helps users compare grocery prices to find the best deals.",
    technologies: ["TypeScript", "React"],
    firstP:
      "CartCompare is an app that helps users compare the prices of grocery items across different stores. The idea behind the app is simple: find out where and when you can buy the cheapest items. By comparing prices, you can save money and make smarter decisions on your grocery shopping. The app supports a variety of grocery items, making it useful for a wide range of users.",
    secondP:
      "Built using TypeScript and React, CartCompare ensures that the app provides accurate and real-time information. Users can search for specific items and compare prices from multiple stores nearby. With its clean and easy-to-navigate interface, the app makes shopping comparisons quick and efficient. You can also view historical price trends for items to help you decide when to purchase.",
    thirdP:
      "CartCompare is perfect for people who want to save money without sacrificing the quality of their groceries. By providing detailed pricing information, the app helps you make informed decisions about where to shop. Whether you're on a tight budget or just looking for a better deal, CartCompare can help you find the lowest prices for your favorite products.",
    image: "../project-post-imgs/cart4.png",
    siteLink: "", // ADD SITE LINK
    githubLink: "", // ADD GITHUB LINK
    embedLink:
      "https://www.loom.com/embed/9278d3a2300e4298b955024ed932821f?sid=910eb522-595c-469b-9611-e3437aaa0f69",
    shareLink:
      "https://www.loom.com/share/9278d3a2300e4298b955024ed932821f?sid=2b3e7c17-29f3-4196-b00d-3888c32b5d62",
    demoImage: "../demo-thumbnails/cartdemo.gif",
  },
  // {
  //   id: 16,
  //   name: "BlogWoohoo",
  //   title: "BlogWoohoo - A Blogging Platform",
  //   description: "A platform for users to create and share their blogs.",
  //   technologies: ["TypeScript", "React"],
  // },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/project/:id"
            element={<ProjectPage PROJECTS={PROJECTS} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
