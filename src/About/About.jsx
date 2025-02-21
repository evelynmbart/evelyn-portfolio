import { useEffect, useState } from "react";
import Post from "../components/Post";
import "./About.css";

const BLOG_POSTS = [
  {
    id: 0,
    date: "June 2023",
    title: "The Beginning",
    post: "The summer of 2023 was when I fell headfirst into the world of frontend web development. I had just graduated with a degree in theatre; it had been my whole life, but COVID had shaken things up in ways I didn't expect. By then, my boyfriend and I were enjoying the summer air of Quebec's finest, ✨Montreal✨, and he—being a developer—planted the idea in my head: Why don't you learn to code and make your own apps for fun? With nothing but time, curiosity, and, well, no work visa to actually get a job, I dove in. I spent that summer playing around with HTML and CSS, bouncing between FreeCodeCamp, YouTube tutorials, and making dumb little web pages for fun. And honestly? It came pretty easy to me. I loved the instant gratification of seeing my code turn into something visual, something real. It was such a fun, carefree way to start—before I realized just how deep and overwhelming this whole web dev thing could get.",
  },
  {
    id: 1,
    date: "July 2023",
    title: "JavaScript & React",
    post: "I've been learning (or attempting to learn) JavaScript for the past few weeks now. It has not been going as smoothly as HTML and CSS did. Thankfully my boyfriend is holding my hand through this journey but jeez JavaScript is so hard! I've gone through Codeacademy's and FreeCodeCamps' free programs but I still don't have a good grasp on syntax or how anything works. On the bright side, I did build (with a ton of help) a hot and cold game. You have 6 attempts to try and guess the randomly chosen number. With each guess, you are alerted if you are cold, cool, warm, hot, or boiling! It is pretty cool despite still being lost in terms of the code, but I'm excited to move forward and keep trying! I've dipped my toe into React! Honestly it's making more sense than JavaScript did which seems super backwards to me. So far the components, props and even state management are clicking but when it comes to functions I'm still pretty lost. HOWEVER! I did complete my first ever React project, via YouTube tutorial! It was a movie/TV show search page! VERY COOL! It's crazy that I built a working website! Although JavaScript is still hard, things are looking up!",
  },
  {
    id: 2,
    date: "April 2024",
    title: "Bagels, code, bagels, code",
    post: "Whoops, it's been a while! Life's been kinda chaotic; we moved from MTL, then down to Raleigh NC on a whim! Because my web dev skills aren't solid enough for a tech job, I got hired as a bagel baker! The plan is to work from 4-12pm then grind programming! It's been an adjustment for sure but we're getting back into things. I actually started learning Python recently. This language is making much more sense to me. The syntax is so easy, it's just English! I've made a few small projects like password generators and alarm clocks. I think my plain old JavaScript is still shaky but React is going well! For now I'm going to keep pushing through and build as many projects as I can. They're all going in a new folder I'm calling 'levelynup' HA I just hope it works!",
  },
  {
    id: 3,
    date: "June 2024",
    title: "Moving Out!",
    post: "Okay we are on the move again! My boyfriend accepted a new job that relocates us to New York City AH! We're thinking Brooklyn would be cool as it seems more our style (not suuuper bustling city). My goal now is to try and grind as much as I can so I can start applying to FE jobs by the time we've settled in! I'm crossing my fingers but without any experience or a proper education within this field I'm a little worried. Maybe I'll just turn into the personality hire.",
  },
  {
    id: 4,
    date: "August 2024",
    title: "Time to GRIND",
    post: "We're here! Took us 10 hours to drive but we are officially moved into THE big city. I don't know how much we'll like it but who knows! Maybe we'll learn to love its chaos. Didn't program too much during the move, July was very busy. I still don't have a portfolio but I'm in a better mindset and skillset (React-wise) to push through with some harder projects. I think my biggest roadblock is my lack of syntax knowledge and I'm honestly very close-minded to what I can do/build. I don't have enough exposure to even comprehend the limits of programming. Right now I'll tackle syntax. I'll repeat builds until I fully memorize them and 100% understand how they work to hopefully transfer those concepts into new/other projects!",
  },
  {
    id: 5,
    date: "October 2024",
    title: "Starting to Build My Portfolio",
    post: "Hello! I'm beginning to work on my portfolio but coming into a huge roadblock with design.",
  },
  {
    id: 6,
    date: "March 2024",
    title: "Launched My Portfolio",
    post: "Designed and developed my professional portfolio using animations, interactivity, and modern UI principles.",
  },
];

const funFacts = [
  {
    id: 1,
    quote:
      "I'm a 23-year-old aspiring front-end web developer who's always looking to improve and learn new things!",
  },
  {
    id: 2,
    quote:
      "I grew up in Vermont, but after graduating in 2023, I spent three months living in Montreal. It's the perfect mix of French culture and North American city life.",
  },
  {
    id: 3,
    quote:
      "I moved to Raleigh, NC, to escape those brutal cold winters and ended up getting a dog named Tux who is now my loyal sidekick.",
  },
  {
    id: 4,
    quote:
      "Before diving into tech, I worked as a professional bagel baker and got promoted within my first 6 months, even though I had zero prior experience in the kitchen!",
  },
  {
    id: 5,
    quote:
      "In August 2024, I made the big move to NYC! Now, I'm looking for front-end development jobs and ready to take on this vibrant city!",
  },
  {
    id: 6,
    quote:
      "When I'm not coding, you can catch me rock climbing (mostly indoors and bouldering), indulging in homecooked meals, or baking bread and sweet treats. My dentist loves me, I'm sure…",
  },
  {
    id: 7,
    quote:
      "I love comedies, I'm a huge fan of Working Moms and Brooklyn 99. One of my favorite movies is Quiz Lady! They never fail to make me laugh.",
  },
  {
    id: 8,
    quote:
      "Performance art is a huge passion of mine – whether it's watching or participating. There's something incredible about expressing creativity through movement or drama.",
  },
  {
    id: 9,
    quote:
      "One of my favorite things about theater is being a part of something bigger than myself. As a team player, I love contributing to a collective vision and making something magical happen together.",
  },
  {
    id: 10,
    quote:
      "Building interactive websites that are fun to use and engaging is my jam! Every new project is an opportunity to grow and get better. ",
  },
  {
    id: 11,
    quote:
      "I want to become a website accessibility expert and help make the web a more inclusive place for everyone!",
  },
].filter((fact) => Object.keys(fact).length > 0);

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? funFacts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextQuote, 5000); // Auto-rotate every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about">
      <div className="about__header">
        <div className="about__header-frame">
          <span className="about__subtitle">About</span>
          <h2 className="about__title">
            A little about me and my journey into web development
          </h2>
          <span className="about__top-left-corner"></span>
          <span className="about__top-right-corner"></span>
          <span className="about__top-right-corner-outside"></span>
          <span className="about__bottom-left-corner"></span>
          <span className="about__bottom-right-corner"></span>
        </div>
      </div>

      <div className="fun-facts-carousel">
        <button className="carousel-button prev" onClick={prevQuote}>
          ←
        </button>
        <div className="carousel-container">
          {funFacts.map((fact, index) => (
            <div
              key={fact.id}
              className={`carousel-card ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                transform: `
                  rotateY(${(index - currentIndex) * 120}deg)
                  translateZ(300px)
                  ${index === currentIndex ? "scale(1)" : "scale(0.8)"}
                `,
              }}
            >
              <p>{fact.quote}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextQuote}>
          →
        </button>
      </div>

      <div className="horizontal-timeline-box">
        {BLOG_POSTS.map((item) => (
          <Post
            key={item.id}
            date={item.date}
            title={item.title}
            post={item.post}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
