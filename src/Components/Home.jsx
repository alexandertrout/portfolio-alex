import React, { Component } from 'react';
import Menubar from "./Menu"
import { StyledTop, TopTitle } from "../styledComponents/styledComponents";
import styled from 'styled-components';
import alex from "../Images/alex.jpeg";

const HomeTitle = styled.p`
  margin: 2vw 50vw 0vw 0vw;
  color: black;
  font-size: 3vw;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
 @media only screen and (max-width: 600px) {
   font-size: 5vw;
  margin: 2vw 20vw 0vw 0vw;
 }
`
const HomeText = styled.p`
  margin: 0vw 50vw 2vw 0vw;
  color: black;
  font-size: 1.5vw;
  background-color: white;
  padding: 20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
   @media only screen and (max-width: 600px) {
     font-size: 2.5vw;
  margin: 0vw 20vw 0vw 0vw;
 }
`
const OuterContainerHome = styled.section`
  height: 90vh;
  padding: 1em 10vw;
  color: black;
  font-size: 0.7em;
  text-align: center;
  background-image: url(${alex});
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

class Home extends Component {
  render() {
    return (
      <main>
        <Menubar/>
        <StyledTop>
          <TopTitle>HOME</TopTitle>
        </StyledTop>
        <OuterContainerHome>
          <HomeTitle> Alexander Trout Developer Portfolio </HomeTitle>
          <HomeText> Welcome to my onlie portfolio for all things code related, I'm a recent Northcoders bootcamp graduate looking for employment as a Junior Dev. Please take a look at some of my projects and the skills I've picked up from working on them, if you like what you see don't hesitate to get in touch as I am avaliable to start working from the beginning of March 2020.</HomeText>
        </OuterContainerHome>
      </main>

    );
  }
}

export default Home;