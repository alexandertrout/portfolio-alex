import React from 'react';
import styled, { keyframes }  from 'styled-components';
import { fadeIn } from 'react-animations';
 
const fadeAnimation = keyframes`${fadeIn}`;
 
const FadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
`;

const Card = styled.div`
  justify-self: center;
  height: 20vw;
  width: 15vw;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const CardImage = styled.img`
  display: flex;
  width: 10vw;
`

const SkillCard = (props) => {
  return (
    <Card>
      <h3>{props.skill}</h3>
      <FadeDiv>
      <CardImage src={props.image} alt={props.skill}/>
      </FadeDiv>
      <p>{props.text}</p>
    </Card>
  );
};

export default SkillCard;