import React, { Component } from 'react';
import {Link} from "@reach/router"
import facebook from "../Images/facebook.png"
import instagram from "../Images/instagram.png"
import github from "../Images/gitHub.png"
import dev from "../Images/dev.png"
import styled from "styled-components"

const Option = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: black;
`

const OptionContainer = styled.div`
  margin: 5vw 20vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2vw;

`

class Footer extends Component {
  render() {
    return (
      <div class="y">
    <OptionContainer>
      <Option to="/home" className="menu-item" ><div class="b">HOME</div></Option>
      <Option to="/skills" className="menu-item" ><div class="b">SKILLS</div></Option>
      <Option to="/portfolio" className="menu-item" ><div class="b">PORTFOLIO</div></Option>
      <Option to="/about" className="menu-item" > <div class="b">ABOUT</div></Option>
      <Option to="/contact" className="menu-item" ><div class="b">CONTACT</div></Option>
    </OptionContainer>
    <OptionContainer>
     <img src={facebook} class="icon" alt="facebook-icon"/>
     <img src={instagram} class="icon" alt="instagram-icon"/>
     <img src={github} class="icon" alt="github-icon"/>
     <img src={dev} class="icon" alt="dev-icon"/>
    </OptionContainer>
    <h3>
      Looking for work in either Leeds or Manchester, United Kingdom.
    </h3>
  </div>
    );
  }
}

export default Footer;