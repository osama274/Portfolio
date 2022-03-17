import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Online Shop Plants",
      github: "https://github.com/dci-final-crew/online-shop-client-redesign",
      demo: "http://localhost:3000",
    },
    {
      id: 2,
      image: IMG2,
      title: "Calculator",
      github: "https://github.com/osama274/Calculetor",
      demo: "https://calculator-calculator.netlify.app",
    },
    {
      id: 3,
      image: IMG3,
      title: "Task Management App",
      github: "https://github.com/osama274/Task-Management-App",
      demo: "https://task-mangement-app.netlify.app",
    },
    {
      id: 4,
      image: IMG4,
      title: "This is a portfolio title",
      github: "https://github.com",
      demo: "https://app.netlify.com/teams/alhaj2904/overview",
    },
    {
      id: 5,
      image: IMG5,
      title: "This is a portfolio title",
      github: "https://github.com",
      demo: "https://app.netlify.com/teams/alhaj2904/overview",
    },
    {
      id: 6,
      image: IMG6,
      title: "This is a portfolio title",
      github: "https://github.com",
      demo: "https://app.netlify.com/teams/alhaj2904/overview",
    },
  ];
  return (
    <section id="portfolio">
      <h5> My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cat">
                <a
                  href={github}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
