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
   @media only screen and (max-width: 600px) {
  height: 40vw;
  width: 40vw;
}
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const CardImage = styled.img`
 display: flex;
  width: 10vw;
 @media only screen and (max-width: 600px) {
  display: flex;
  width: 20vw;
}
`

const SkillCard = (props) => {
  return (
    <Card>
      <h3>{props.skill}</h3>
      <FadeDiv>
      <CardImage src={props.image} alt={props.skill}/>
      </FadeDiv>
      <p class="skill-text">{props.text}</p>
    </Card>
  );
};

export default SkillCard;