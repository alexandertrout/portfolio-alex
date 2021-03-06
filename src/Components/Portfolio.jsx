import React, { Component } from 'react';
import MenuBar from "../Components/Menu";
import styled from 'styled-components';
import ProjectCardS from "./ProjectCardX";
import {StyledTop, TopTitle } from "../styledComponents/styledComponents";
// portfolio pics
import feNcNews from "../Images/feNcNews.png";
import beNcNews from "../Images/be-nc-news.png";
import SongGame from "../Images/SongGame.png";
import moments from "../Images/Moments.png";
import astrid from "../Images/Astrid.png";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: middle;
  align-items: center;
  width: 100%;
`

class Portfolio extends Component {
    state = {
    portfolio: [
        {
          picture: astrid,
          name: "Astrid Media - React.js",
          link: "https://astridmedia.netlify.com/ ",
          GitHub: "https://github.com/alexandertrout/astrid",
          description:
            "Working with a small start up to help them develop ideas for their online presence, I offered to do this voluntarily through linkedIn to gain experience working with businnesses. (Currently Desktop Only).",
          skillsUsed: ["React Native", "Styled-Components", "Node.js", "Express"]
        },
      {
        picture: moments,
        name: "Moments - React Native",
        link: "https://www.youtube.com/watch?v=NZg1kbwIkIg&feature=youtu.be",
        GitHub: "https://github.com/DominicH247/moments-frontend",
        description:
          "Final Project at northcoders, works with a rasperry pi picture frame to display live photos. Built over 8 days with a team of 6, I was in a pair responsible for building the React Native front end for the project.",
        skillsUsed: ["React Native", "Node.js", "Cognito", "S3", "DynamoDB", "Express"]
      },
      {
        picture: feNcNews,
        name: "News Website Front End - React.js",
        link: "https://alex-trout-nc-news.netlify.com/",
        GitHub: "https://github.com/alexandertrout/fe-nc-news",
        description:
          "The hosted front end single-page application built using react, for desktop and mobile web. The aim for this project was to build an app similar to reddit, which allows users to post articles as well as like, comment and vote on other users articles.",
          skillsUsed: ["React.js", "JavaScript", "UI", "Styled Components"]
      },
      {
        picture: beNcNews,
        name: "News Website Backend Server - Node.js",
        link: "https://alex-be-nc-news.herokuapp.com/api",
        GitHub: "https://github.com/alexandertrout/alex-be-nc-news",
        description: `A Server built using express.js, postgreSQL and knex, contacted by the front end app of Nc News. RESTful endpoints avaliable are detailed in the README for this repo on my GitHub.`,
        skillsUsed: ["Node.js", "JavaScript", "Express", "MVC"]
      },
      {
        picture: SongGame,
        name: "Song Guessing Game - Node.js",
        link: "https://pickthefakesong.herokuapp.com/",
        GitHub: "https://github.com/alexandertrout/songgame",
        description:
          "A Game hosted on heroku, runs using an express server backend to contact the apple music API with a query. The aim is to guess the fake song out of the line up of songs returned to the user.",
        skillsUsed: ["Node.js", "JavaScript", "EJS", "Express", "MVC", "HTML", "CSS"]
      }
    ]
  };
  render() {
    return (
      <div>
        <StyledTop>
          <TopTitle>PORTFOLIO</TopTitle>
        </StyledTop>
        <MenuBar/>
          <ProjectsContainer>
          {this.state.portfolio.map(project=> {
            return (
              <ProjectCardS name={project.name} image={project.picture} git={project.GitHub} link={project.link} about={project.description} skillsUsed={project.skillsUsed}/>
              )
            })}
          </ProjectsContainer>
      </div>
    );
  }
}

export default Portfolio;