import React, { Component } from 'react';
import Menubar from "./Menu";
import { StyledTop, TopTitle, leftAnimation, rightAnimation } from "../styledComponents/styledComponents"
import styled from 'styled-components';

const OuterContainerAbout = styled.section`
  padding: 30px 10vw;
  background-color: #313131;
  color: whitesmoke;
  font-weight: bold;
   @media only screen and (max-width: 600px) {
  padding: 0;
  }
`

const ExperienceDiv = styled.div`
 margin: 0vw 20vw;
 display: grid;
 grid-template-columns: 0.8fr 2fr;
 text-align: left;
 background-color: #313131;
  @media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;
  padding: 0;
  margin: 0;
  }
`

const ExperienceTitle = styled.h3`
  text-align: left;
  padding: 0 10px;
  margin: 10px 0px;
  font-size: 22;
  animation: 3s ${leftAnimation};
   @media only screen and (max-width: 600px) {
  padding: 20px 15px;
  margin: 0;
  }
`

const ExperienceText = styled.p`
  padding: 0 10px;
  margin: 10px 0px;
  text-align: left;
  font-size: 14;
  animation: 3s ${rightAnimation};
   @media only screen and (max-width: 600px) {
   padding: 10px 15px;
   margin: 0;
   font-size: 14px;
  }
`

class About extends Component {
 state = {

  }
  render() {
    return (
      <div>
        <Menubar/>
        <StyledTop>
          <TopTitle>ABOUT</TopTitle>
        </StyledTop>
        <OuterContainerAbout>
          <ExperienceDiv>
          <ExperienceTitle>Northcoders</ExperienceTitle>
          <ExperienceText class="about-text">Recently Graduated 12 week software developer bootcamp designed to provide me with the necessary skills to start work as a junior developer. Learning to program in JavaScript, the course covered test-driven development, pair programming, object-oriented programming, and both front and back end development. I am experienced dealing with asynchronous programming, using APIs and databases, Express, SQL, and React using styled components. In my final project I gained experience with react native for designing cross-platform native apps as well as implemeting the AWS services Cognito, Amplify, S3 Storage, DynamoDB, and using Lambdas with triggers. Graduated early March 2020 I am looking for positions starting immediately.</ExperienceText>
          </ExperienceDiv>
          <ExperienceDiv>
          <ExperienceTitle>Manchester Metropolitan University</ExperienceTitle>
          <ExperienceText >I graduated from Manchester metropolitan university in June 2019 with a first in Environmental Science. My key interests included; data analysis and statistics, applied GIS and remote sensing and sustainable production methods. I can confidently use statistics packages such as SPSS and a range of GIS programs including ArcGIS, QGIS, IDRISI and ERDAS Imagine. I have gained experience working with pollution data covering airborne pollutants, land contamination and water quality. My dissertation was on how climactic factors can influence air quality in cities.</ExperienceText>
          </ExperienceDiv>
          <ExperienceDiv>
          <ExperienceTitle>National Sales Executive and Account Manager, Go Green </ExperienceTitle>
          <ExperienceText >As a national sales executive it was my responsibility to effectively communicate with prospects for B2B sales purposes, and to develop relationships with other businesses. Prospecting for go green involved imparting key information clearly, and ensuring that the benefits of using a sustainable service were understood by other businesses. Once clients began to trade with go green I was their main point of contact with the business, responsible for the ongoing relationship with the company. In this position I frequently communicated with a range of teams within external businesses, including; accounting, buying, business development, health and safety, environmental, or directly with directors of SME’s.
          </ExperienceText>
          </ExperienceDiv>
          <ExperienceDiv>
          <ExperienceTitle>Carbon Literacy Trainer </ExperienceTitle>
          <ExperienceText>
            As a carbon literacy trainer I worked to deliver sessions to fellow students at MMU, these workshops covered climate science, the impacts of climate change, and current mitigation strategies. Delivering training to students resulted in them becoming certified carbon literate, and allowed me to further develop my leadership, communication, and presentation skills. I am glad to have had the opportunity to influence others, and to provide them with some personal engagement in understanding climate change and sustainability. 
          </ExperienceText>
          </ExperienceDiv>
          <ExperienceDiv>
          <ExperienceTitle>Team Leader, Topman Trafford Centre </ExperienceTitle>
          <ExperienceText>
           As a team leader I furthered my skills in leadership and teamwork with a focus on personal development and meeting sales-driven targets. This role involved utilising reports to make commercial decisions for the business, as well as ensuring customers were met with exceptional face-to-face service. I enjoyed particularly the responsibility of making in-store decisions which resulted in visible results on sales reports and the overall performance of the business.
          </ExperienceText>
          </ExperienceDiv>
        </OuterContainerAbout>
      </div>
    );
  }
}

export default About;