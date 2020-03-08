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
          <p class="about-text">Recently Graduated 12 week software developer bootcamp designed to provide me with the necessary skills to start work as a junior developer. Learning to program in JavaScript, it covers test-driven development, pair programming, object-oriented programming, and both front and back end development. I am experienced dealing with asynchronous programming, using APIs and databases, Express, SQL, and React using styled components. Due to graduate early March 2020 Ill be looking for positions immediately.</p>
          <h1>Previous Experience</h1>
          <h3>Manchester Metropolitan University</h3>
          <p class="about-text">I graduated from Manchester metropolitan university in June 2019 with a first in Environmental Science. My key interests included; data analysis and statistics, applied GIS and remote sensing and sustainable production methods. I can confidently use statistics packages such as SPSS and a range of GIS programs including ArcGIS, QGIS, IDRISI and ERDAS Imagine. I have gained experience working with pollution data covering airborne pollutants, land contamination and water quality. My dissertation was on how climactic factors can influence air quality in cities.</p>
          <h3>National Sales Executive and Account Manager, Go Green </h3>
          <p class="about-text">As a national sales executive it was my responsibility to effectively communicate with prospects for B2B sales purposes, and to develop relationships with other businesses. Prospecting for go green involved imparting key information clearly, and ensuring that the benefits of using a sustainable service were understood by other businesses. Once clients began to trade with go green I was their main point of contact with the business, responsible for the ongoing relationship with the company. In this position I frequently communicated with a range of teams within external businesses, including; accounting, buying, business development, health and safety, environmental, or directly with directors of SME’s.
          </p>
          <h3>Carbon Literacy Trainer </h3>
          <p class="about-text">
            As a carbon literacy trainer I worked to deliver sessions to fellow students at MMU, these workshops covered climate science, the impacts of climate change, and current mitigation strategies. Delivering training to students resulted in them becoming certified carbon literate, and allowed me to further develop my leadership, communication, and presentation skills. I am glad to have had the opportunity to influence others, and to provide them with some personal engagement in understanding climate change and sustainability. 
          </p>
          <h3>Team Leader, Topman Trafford Centre </h3>
          <p class="about-text">
           As a team leader I furthered my skills in leadership and teamwork with a focus on personal development and meeting sales-driven targets. This role involved utilising reports to make commercial decisions for the business, as well as ensuring customers were met with exceptional face-to-face service. I enjoyed particularly the responsibility of making in-store decisions which resulted in visible results on sales reports and the overall performance of the business.
          </p>
        </OuterContainer>
      </div>
    );
  }
}

export default About;