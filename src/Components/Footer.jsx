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
  margin: 5vw 10vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2vw;
  @media only screen and (max-width: 600px) {
  height: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 4vw;
  }
`

const IconContainer = styled.div`
  margin: 1vw 30vw; 
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2vw;
  @media only screen and (max-width: 600px) {
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 4vw;
  }
`

const Styledh3 = styled.h3`
  font-size: 1.5vw;
  padding: 50px 10px;
  margin: 0;
    @media only screen and (max-width: 600px) {
  font-size: 14px;
  }
`
  



class Footer extends Component {
  render() {
    return (
      <>
      <div>
    <OptionContainer>
      <Option to="/home" className="menu-item" ><div class="b">HOME</div></Option>
      <Option to="/skills" className="menu-item" ><div class="b">SKILLS</div></Option>
      <Option to="/portfolio" className="menu-item" ><div class="b">PORTFOLIO</div></Option>
      <Option to="/about" className="menu-item" > <div class="b">ABOUT</div></Option>
      <Option to="/contact" className="menu-item" ><div class="b">CONTACT</div></Option>
    </OptionContainer>
    <IconContainer>
            <a href="https://github.com/alexandertrout"><img src={github} class="icon" alt="github-icon" /></a>
            <a href="https://dev.to/alexandertrout"> <img src={dev} class="icon" alt="dev-icon" /></a>
            <a href="https://www.instagram.com/alexandertrout/?hl=en"><img src={instagram} class="icon" alt="instagram-icon" /></a>
            <a href="https://www.facebook.com/alex.trout.988?ref=bookmarks"><img src={facebook} class="icon" alt="facebook-icon" /></a>
    </IconContainer>
  </div>
      <Styledh3>
        Looking for work in either Leeds or Manchester, United Kingdom.
    </Styledh3>
    </>
    );
  }
}

export default Footer;