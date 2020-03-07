import React, { Component } from 'react';
import Menubar from "./Menu";
import SkillCard from "./SkillCard";
import styled from 'styled-components';
import { StyledTop, OuterContainer } from "../styledComponents/styledComponents"
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5vw;
`

class About extends Component {
 state = {
    skills: [
    {
     name: "JavaScript",
     image: javascript,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
     {
     name: "Node.js",
     image: nodejs,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
    {
     name: "React.js",
     image: react,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
    {
     name: "CSS",
     image: css,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
     {
     name: "PostgreSQL",
     image: postgres,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
    {
     name: "Golang",
     image: golang,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
    {
     name: "HTML",
     image: html,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
    {
     name: "Knex",
     image: knex,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    },
    {
     name: "TDD",
     image: tdd,
     text: "asdfjkl asdfjk; sdfjkl; sadfjkl; sadfjl; sdfjl; sdfjl; asdfjkl; asdfjkl; asdfjkl; sadfj;"
    }
  ]
  }
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <h1>SKILLS</h1>
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