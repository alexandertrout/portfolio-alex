import React from 'react';
import styled, { keyframes }  from 'styled-components';
import { fadeIn } from 'react-animations';
 
const fadeAnimation = keyframes`${fadeIn}`;
 
const FadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
`;

const Card = styled.div`
  justify-self: center;
  width: 30vw;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const CardImage = styled.img`
  display: flex;
  width: 25vw;
`

const ProjectCard = (props) => {
  return (
    <Card>
      <h3>{props.name}</h3>
      <FadeDiv>
      <CardImage src={props.image} alt={props.name}></CardImage>
      </FadeDiv>
      <p>{props.about}</p>
      <p>{props.link}</p>
      <p>{props.git}</p>
    </Card>
  );
};

export default ProjectCard;