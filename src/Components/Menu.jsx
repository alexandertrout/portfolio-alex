import React, { Component } from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';

const MenuContainer = styled.div`
  margin: 0vw 0vw 1vw 0vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
  /* height: 40vw; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  }
`

const Option = styled(Link)`
  font-size: 1vw;
  padding: 0vw 1vw;
  text-align: center;
  text-decoration: none;
  color: black;
   @media only screen and (max-width: 800px) {
    font-size: 2vw;
  }
`

class Menubar extends Component {
  render() {
    return (
      <div>
        <MenuContainer>
        <Option to="/" className="menu-item" ><div class="b">HOME</div></Option>
        <Option to="/skills" className="menu-item" ><div class="b">SKILLS</div></Option>
        <Option to="/portfolio" className="menu-item" ><div class="b">PORTFOLIO</div></Option>
        <Option to="/about" className="menu-item" > <div class="b">ABOUT</div></Option>
        <Option to="/contact" className="menu-item" ><div class="b">CONTACT</div></Option>
        </MenuContainer>
    </div>
      //  <Menu width={ '40%' } >
      //   <StyledLink to="/" className="menu-item">
      //     <div id="home" className="menu-item">
      //       {/* <LinkIcon src={macbook} alt="mac"/> */}
      //       Home
      //     </div>
      //   </StyledLink>

      //    <StyledLink to="/skills" className="menu-item">
      //     <div id="skills" className="menu-item">
      //       {/* <LinkIcon src={macbook} alt="mac"/> */}
      //       Skills
      //     </div>
      //   </StyledLink>

      //   <StyledLink to="/portfolio" className="menu-item">
      //     <div id="portfolio" className="menu-item">
      //       {/* <LinkIcon src={macbook} alt="mac"/> */}
      //       Portfolio
      //     </div>
      //   </StyledLink>

      //   <StyledLink to="/about" className="menu-item">
      //     <div id="about" className="menu-item">
      //       {/* <LinkIcon src={macbook} alt="mac"/> */}
      //       About
      //     </div>
      //   </StyledLink>

      //   <StyledLink to="/contact" className="menu-item">
      //     <div id="contact" className="menu-item">
      //       {/* <LinkIcon src={phoneicon} alt="mac"/> */}
      //       Contact
      //     </div>
      //   </StyledLink>
      // </Menu>
    );
  }
}

export default Menubar;