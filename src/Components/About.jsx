import React, { Component } from 'react';
import Menubar from "./Menu"
import { StyledTop } from "../styledComponents/styledComponents"

class About extends Component {
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <h1>ABOUT</h1>
        </StyledTop>
      </div>
    );
  }
}

export default About;