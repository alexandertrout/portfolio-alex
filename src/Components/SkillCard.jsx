import React from 'react';
import styled from 'styled-components';

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
      <CardImage src={props.image} alt={props.skill}/>
      <p>{props.text}</p>
    </Card>
  );
};

export default SkillCard;