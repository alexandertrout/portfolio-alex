import React from 'react';
import styled, { keyframes }  from 'styled-components';
import { fadeIn } from 'react-animations';
 
const fadeAnimation = keyframes`${fadeIn}`;
 
const FadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
`;

const Card = styled.div`
  justify-self: center;
  width: 50vw;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 2vw;
`

const CardImage = styled.img`
  display: flex;
  width: 50vw;
`
const CardTitle = styled.h2`
  font-size: 2vw;
      @media only screen and (max-width: 800px) {
  font-size: 24px;
}
`

const CardText = styled.p`
  font-size: 1vw;
      @media only screen and (max-width: 800px) {
  font-size: 14px;
}
`

const ProjectCard = (props) => {
  return (
    <Card>
      <CardTitle>{props.name}</CardTitle>
      <FadeDiv>
      <CardImage src={props.image} alt={props.name}></CardImage>
      </FadeDiv>
      <CardText>{props.about}</CardText>
      <CardText><a href={props.link}>{props.link}</a></CardText>
      <CardText><a href={props.git}>{props.git}</a></CardText>
    </Card>
  );
};

export default ProjectCard;