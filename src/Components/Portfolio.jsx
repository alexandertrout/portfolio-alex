import React, { Component } from 'react';
import Menubar from "./Menu"
import {StyledTop} from "../styledComponents/styledComponents";

class Portfolio extends Component {
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <h1>PORTFOLIO</h1>
        </StyledTop>
      </div>
    );
  }
}

export default Portfolio;