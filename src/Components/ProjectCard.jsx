import React from 'react';
import styled from 'styled-components';

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
  width: 10vw;
`

const ProjectCard = (props) => {
  return (
    <Card>
      <h3>{props.name}</h3>
      <CardImage src={props.image} alt={props.name}></CardImage>
      <p>{props.about}</p>
      <p>{props.link}</p>
      <p>{props.git}</p>
    </Card>
  );
};

export default ProjectCard;