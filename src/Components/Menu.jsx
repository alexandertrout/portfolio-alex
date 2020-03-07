import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "@reach/router";
import styled from 'styled-components';
import macbook from "../Images/macbook.png";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`
const LinkIcon = styled.img`
  height: 20px;
  padding: 0 20px;
`

class Menubar extends Component {
  render() {
    return (
       <Menu width={ '20%' }>
        <StyledLink to="/" className="menu-item">
          <div id="home" className="menu-item">
            {/* <LinkIcon src={macbook} alt="mac"/> */}
            Home
          </div>
        </StyledLink>

         <StyledLink to="/skills" className="menu-item">
          <div id="skills" className="menu-item">
            {/* <LinkIcon src={macbook} alt="mac"/> */}
            Skills
          </div>
        </StyledLink>

        <StyledLink to="/portfolio" className="menu-item">
          <div id="portfolio" className="menu-item">
            <LinkIcon src={macbook} alt="mac"/>
            Portfolio
          </div>
        </StyledLink>

        <StyledLink to="/about" className="menu-item">
          <div id="about" className="menu-item">
            {/* <LinkIcon src={macbook} alt="mac"/> */}
            About
          </div>
        </StyledLink>

        <StyledLink to="/contact" className="menu-item">
          <div id="contact" className="menu-item">
            {/* <LinkIcon src={phoneicon} alt="mac"/> */}
            Contact
          </div>
        </StyledLink>
      </Menu>
    );
  }
}

export default Menubar;