import React, { Component } from 'react';
import Menubar from "./Menu"
import { StyledTop, OuterContainer } from "../styledComponents/styledComponents";
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
          <h1>HOME</h1>
        </StyledTop>
        <OuterContainer>
          <h2> Hello welcome to the homepage </h2>
          <p> Text is a thing that should go here with stuff mapped out underneath for the rest of the page. Text is a thing that should go here with stuff mapped out underneath for the rest of the page. Text is a thing that should go here with stuff mapped out underneath for the rest of the page. Text is a thing that should go here with stuff mapped out underneath for the rest of the page. Text is a thing that should go here with stuff mapped out underneath for the rest of the page. </p>
          <HomePic src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjUxMTY3fQ&w=1000&q=80" alt="img"/>
        </OuterContainer>
      </main>

    );
  }
}

export default Home;