import React, { Component } from 'react';
import { StyledTop, TopTitle } from "../styledComponents/styledComponents";
import MenuBar from "../Components/Menu";
import styled from 'styled-components';
import alex from "../Images/alex.jpeg";

const HomeTitle = styled.p`
@font-face {
  font-family: prox;
  src: url(./proximanova-bold.otf);
  font-weight: normal;
}
  font-family: prox;
  margin: 2vw 0vw 0vw 0vw;
  color: white;
  font-size: 4vw;
  padding: 20px 20px 5px 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
 @media only screen and (max-width: 800px) {
   font-size: 5vw;
  margin: 2vw 20vw 0vw 0vw;
 }
`
const HomeText = styled.p`
@font-face {
  font-family: prox;
  src: url(./proximanova-bold.otf);
  font-weight: normal;
}
  font-family: prox;
  margin: 0vw 50vw 4vw 0vw;
  color: white;
  font-size: 1.5vw;
  padding: 20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
   @media only screen and (max-width: 800px) {
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
        <StyledTop>
          <TopTitle>HOME</TopTitle>
        </StyledTop>
        <MenuBar/>
        <OuterContainerHome>
          <HomeTitle> Alex Trout </HomeTitle>
          <HomeText> Software Developer & <br></br> Environmental Science Graduate </HomeText>
        </OuterContainerHome>
      </main>

    );
  }
}

export default Home;