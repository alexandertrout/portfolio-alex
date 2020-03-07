import React, { Component } from 'react';
import Menubar from "./Menu"
import {StyledTop} from "../styledComponents/styledComponents";

class Contact extends Component {
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <h1>CONTACT</h1>
        </StyledTop>
      </div>

    );
  }
}

export default Contact;