import React, { Component } from 'react';
import Menubar from "./Menu";
import { StyledTop, OuterContainer } from "../styledComponents/styledComponents"

class About extends Component {
 state = {

  }
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <h1>ABOUT</h1>
        </StyledTop>
        <OuterContainer>
          <h1>Text example example text etc</h1>
          <p>asdf asdfg dfgh fghj ertyuikol dfgh dfgh sdfghjk sdf asdfg dfgh fghj ertyuikol dfgh dfgh sdfghjk sdf asdfg dfgh fghj ertyuikol dfgh dfgh sdfghjk sdf asdfg dfgh fghj ertyuikol dfgh dfgh sdfghjk sdf asdfg dfgh fghj ertyuikol dfgh dfgh sdfghjk sdf asdfg dfgh fghj ertyuikol dfgh dfgh sdfghjk</p>
        </OuterContainer>
      </div>
    );
  }
}

export default About;