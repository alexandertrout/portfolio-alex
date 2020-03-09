import React, { Component } from 'react';
import Menubar from "./Menu"
import { StyledTop, OuterContainer, TopTitle } from "../styledComponents/styledComponents";
import styled from 'styled-components';

const HomePic = styled.img`
  width: 50vw;
`
class Home extends Component {
  render() {
    return (
      <main>
        <Menubar/>
        <StyledTop>
          <TopTitle>HOME</TopTitle>
        </StyledTop>
        <OuterContainer>
          <h2> Alexander Trout Developer Portfolio </h2>
          <p> Welcome to my onlie portfolio for all things code related, I'm a recent Northcoders bootcamp graduate looking for employment as a Junior Dev. Please take a look at some of my projects and the skills I've picked up from working on them, if you like what you see don't hesitate to get in touch as I am avaliable to start working from the beginning of March 2020.</p>
          <HomePic src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjUxMTY3fQ&w=1000&q=80" alt="img"/>
        </OuterContainer>
      </main>

    );
  }
}

export default Home;