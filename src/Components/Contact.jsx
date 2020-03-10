import React, { Component } from 'react';
import Menubar from "./Menu"
import ContactForm from "./ContactForm";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import {StyledTop, TopTitle} from "../styledComponents/styledComponents";
import styled, { keyframes }  from 'styled-components';
import { fadeIn } from 'react-animations';

const MapOuterContainer = styled.section`
  padding: 1em 5vw;
  color: black;
  font-size: 0.7em;
  text-align: left;
  display: grid;
  grid-template-columns: 5fr 1.5fr ;
  @media only screen and (max-width: 600px) {
  padding: 1em 5vw;
  color: black;
  font-size: 0.7em;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: middle;
  }
`
 
const fadeAnimation = keyframes`${fadeIn}`;
 
const MapFadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Styledh = styled.h3`
  font-size: 3vw;
  padding: 10px 10px;
  margin: 0;
`

const StyledDiv = styled.div`
  font-size: 1.5vw;
  padding: 5px 10px;
  margin: 0;
`

const ContactInfo = styled.div`
    padding: 5vw 1vw;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    text-align: center;
     @media only screen and (max-width: 600px) {
     height: 30vw;
     }  
`

class Contact extends Component {
  render() {
    return (
      <div>
        <Menubar/>
        <StyledTop>
          <TopTitle>CONTACT</TopTitle>
        </StyledTop>


        <MapOuterContainer>
        <MapFadeDiv>
          <Map center={["53.521361", "-1.13241"]} zoom={5}>
                <TileLayer url="https://api.mapbox.com/styles/v1/alexandertrout/ck67r24b90aoe1iomt2f9v8n5/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGFuZGVydHJvdXQiLCJhIjoiY2s2NndtcHFjMDJkZzNqbXFmN2Q1bzgyayJ9.zFETMUE1SAKmZy0Zje6a7g" />
                <Marker position={["53.521361", "-1.13241"]}>
                  <Popup>Current Location: Doncaster</Popup>
                </Marker>
              </Map>
        </MapFadeDiv>
        <ContactInfo>
            <Styledh>PHONE</Styledh>
            <StyledDiv>07516158756</StyledDiv>
            <Styledh>EMAIL</Styledh>
            <StyledDiv>alexandertrout96@gmail.com</StyledDiv>
        </ContactInfo>
        </MapOuterContainer>


        <ContactForm/>


      </div>

    );
  }
}

export default Contact;