import React, { Component } from 'react';
import Menubar from "./Menu";
import SkillCard from "./SkillCard";
import styled from 'styled-components';
import { StyledTop, OuterContainer, TopTitle} from "../styledComponents/styledComponents"
// skills icons
import javascript from "../Images/javascript.png";
import nodejs from "../Images/node-js.png";
import react from "../Images/React.png";
import css from "../Images/css.png";
import postgres from "../Images/postgresql.png";
import golang from "../Images/golang.png";
import html from "../Images/HTML.png";
import knex from "../Images/knex.png";
import tdd from "../Images/TDD.png";
import amplify from "../Images/Amplify.png";
import s3 from "../Images/aws-s3.svg";
import cognito from "../Images/cognito.png";
import dynamo from "../Images/dynamodb.svg";
import lambda from "../Images/lambda.png";

import * as utils from "../Components/utils/utils"

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5vw;
  @media only screen and (max-width: 600px) {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vw;
}
`

class About extends Component {
 state = {
    skills: [
       {
     name: "Amplify",
     image: amplify,
     text: "I recently used Amplify within a react native project to access AWS services"
    },
     {
     name: "S3 Buckets",
     image: s3,
     text: "S3 storage was used in our final project for storing media"
    },
    {
     name: "cognito",
     image: cognito,
     text: "Experience with AWS cognito and making custom sign up and sign in forms in react native"
    },
    {
     name: "dynamoDB",
     image: dynamo,
     text: "I have worked with no SQL databases like dynamoDB for storing and querying non-relational data"
    },
     {
     name: "lambda",
     image: lambda,
     text: "Exposure to managing lambda triggers and writing node.js lambda functions"
    },
    {
     name: "JavaScript",
     image: javascript,
     text: "3 month full time bootcamp, covering full stack development using Javascript and Node.js"
    },
     {
     name: "Node.js",
     image: nodejs,
     text: "Strong understanding of how Node.js runs javascript code, including asynchronous programming and OOP"
    },
    {
     name: "React.js",
     image: react,
     text: "Experience building single page front-end web apps using react, confident using axios and fetch to communicate with APIs"
    },
    {
     name: "CSS",
     image: css,
     text: "I enjoy styling using vanilla CSS and CSS within styled components, good knowledge of flexbox and grid"
    },
     {
     name: "PostgreSQL",
     image: postgres,
     text: "Confident using relational databases, including quering using joins, filters and sorting"
    },
    {
     name: "Golang",
     image: golang,
     text: "Completed a udemy course covering the fundamentals of Go alongside the Northcoders course"
    },
    {
     name: "HTML",
     image: html,
     text: "I can use semantic HTML alongside CSS to construct web pages, and EJS for server-side rendering"
    },
    {
     name: "Knex",
     image: knex,
     text: "Experience with migrations, seeding and querying relational databases using knex within an MVC framework"
    },
    {
     name: "TDD",
     image: tdd,
     text: "Test driven development has been a strong focus of my learning at Northcoders, and the TDD cycle was used to solve katas and to test when developing API endpoints. I can write tests in Mocha & Chai and in Jest."
    }
  ]
  }

  componentDidMount = () => {
    let newSkillsOrder = utils.shuffle(this.state.skills);
    this.setState({skills: newSkillsOrder})
  }
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <TopTitle>SKILLS</TopTitle>
        </StyledTop>
        <OuterContainer>
          <SkillsContainer>
          {this.state.skills.map(skill => {
            return (
              <SkillCard skill={skill.name} image={skill.image} text={skill.text}/>
              )
            })}
          </SkillsContainer>
        </OuterContainer>
      </div>
    );
  }
}

export default About;