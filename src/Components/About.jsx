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
          <h1>Coding Experience</h1>
          <p>Recently Graduated 12 week software developer bootcamp designed to provide me with the necessary skills to start work as a junior developer. Learning to program in JavaScript, it covers test-driven development, pair programming, object-oriented programming, and both front and back end development. I am experienced dealing with asynchronous programming, using APIs and databases, Express, SQL, and React using styled components. Due to graduate early March 2020 Ill be looking for positions immediately.</p>
          <h1>Previous Experience</h1>
          <p>I graduated from Manchester metropolitan university in June 2019 with a first in Environmental Science. My key interests included; data analysis and statistics, applied GIS and remote sensing and sustainable production methods. My dissertation was on how climactic factors can influence air quality in cities. My most recent experience is as a national account manager. I have experience effectively communicating and developing relationships with businesses from a wide range of industries, with a focus on sustainability and transparent waste management.</p>
        </OuterContainer>
      </div>
    );
  }
}

export default About;