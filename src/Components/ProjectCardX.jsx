import React, { Component } from 'react';
import { leftAnimation, rightAnimation } from "../styledComponents/styledComponents";
import styled from 'styled-components';
import mac from '../Images/mac.jpg';

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
  width: 100vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
  
`

const CardImage = styled.div`
  margin: 5vw 0vw;
  background-image: url(${mac}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  width: 60vw; /* You must set a specified height */
  height: 34vw;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}`


const PortImage = styled.img`
  position: absolute;
  left: 17.45vw;
  top: 12.8vw;
  width: 25vw;
`
const TextDiv = styled.div`
margin: 5vw 0vw;
  width: 27vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: middle;
  text-align: center;
  @media only screen and (max-width: 600px) {
  width: 80vw;
}
`
const SkillsUsed = styled.ul`
  margin: 0vw 3vw;
  display: flex; 
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0vw 3vw 0vw 0vw;
        @media only screen and (max-width: 600px) {
  padding: 0vw 5vw;
}
`

const ButtonContainer = styled.div`
  width: 27vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
        @media only screen and (max-width: 600px) {
  margin: 3vw 0vw;
  width: 80vw;
  justify-content: space-around;
}
`

const ExampleButton = styled.button`
  width: 10vw;
  height: 3vw;
  margin: 1vw;
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
  height: 3vw;
  background-color: #5EADD5;
  border: none;
  border-radius: 5px;
          @media only screen and (max-width: 600px) {
  width: 30vw;
  height: 10vw;
}
`


class ProjectCardX extends Component {
  render() {
    return (
      <Container>

        <CardImage src={mac}>
        <PortImage src={this.props.image} alt={this.props.name}></PortImage>
        </CardImage>
        <TextDiv>
          <h2>{this.props.name}</h2>
          <p>{this.props.about}</p>
          <SkillsUsed>
            {this.props.skillsUsed.map(skill => {
              return <li>{skill}</li>
            })}
          </SkillsUsed>
          <ButtonContainer>
            <ExampleButton><a href={this.props.link}>See it!</a></ExampleButton>
            <GitHubButton><a href={this.props.git}>GitHub Repo</a></GitHubButton>
          </ButtonContainer>
        </TextDiv>

      </Container>
    );
  }
}

export default ProjectCardX;