import React from 'react';
import { leftAnimation, rightAnimation } from "../styledComponents/styledComponents";
import styled from 'styled-components';

const Card = styled.section`
  width: 100vw;
  height: 40vw;
  background-color: white;
  position: relative;
        @media only screen and (max-width: 600px) {
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
`

const CardImage = styled.img`
  animation: 3s ${leftAnimation};
  width: 50vw;
  position: absolute;
  left:0;
  bottom:0;
  z-index: 2;
        @media only screen and (max-width: 600px) {
  width: 50vw;
  position: relative;
}
`

const CardInfoContainer = styled.section`
 animation: 3s ${rightAnimation};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #313131;
  width: 60vw;
  height: 35vw;
  position: absolute;
  right:0;
  top:0;
  z-index: 1;
        @media only screen and (max-width: 600px) {
  width: 100vw;
  height: 35vh;
  position: relative;
  background-color: white;
  color: black;
}
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45vw;
  height:30vw;
        @media only screen and (max-width: 600px) {
  width: 100vw;
  height: 25vh;
  position: relative;
  text-align: center;
}
`

const CardTitle = styled.h2`
  background-color: #313131;
  color: white;
  font-size: 2vw;
      @media only screen and (max-width: 600px) {
  font-size: 20px;
  padding: 0vw 5vw;
  background-color: white;
  color: black;
}
`
const CardText = styled.p`
  background-color: #313131;
  color: white;
  font-size: 1.2vw;
      @media only screen and (max-width: 600px) {
  font-size: 14px;
  padding: 0vw 5vw;
  background-color: white;
  color: black;
}
`

const SkillsUsed = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0vw 3vw 0vw 0vw;
        @media only screen and (max-width: 600px) {
  padding: 0vw 5vw;
}
`

const ButtonContainer = styled.div`
  width: 21vw;
  display: flex;
  justify-content: space-between;
        @media only screen and (max-width: 600px) {
  width: 100vw;
  justify-content: space-around;
}
`

const ExampleButton = styled.button`
  width: 10vw;
  height: 3vw;
  background-color: #A4C6D3  ;
  border: none;
  border-radius: 5px;
          @media only screen and (max-width: 600px) {
  width: 30vw;
  height: 10vw;
}
`
const GitHubButton = styled.button`
  width: 10vw;
  background-color: #5EADD5;
  border: none;
  border-radius: 5px;
          @media only screen and (max-width: 600px) {
  width: 30vw;
  height: 10vw;
}
`

const Seperator = styled.div`
  color: white;
  height: 7vh;
`

const ProjectCardS = (props) => {
  return (
    <>
    <Card>
      <CardImage src={props.image} alt={props.name}></CardImage>

      <CardInfoContainer>
        <CardInfo>
         <CardTitle>{props.name}</CardTitle>
         <CardText>{props.about}</CardText>
         <SkillsUsed>
         {props.skillsUsed.map(skill => {
            return <CardText>{skill + " "}</CardText>
         })}
         </SkillsUsed>
         <ButtonContainer>
            <ExampleButton><a href={props.link}>See it!</a></ExampleButton>
            <GitHubButton><a href={props.git}>GitHub Rep</a></GitHubButton>
         </ButtonContainer>
        </CardInfo>
      </CardInfoContainer>
    </Card>
    <Seperator/>
    </>
  );
};

export default ProjectCardS;