import React, { Component } from 'react';
import Menubar from "./Menu"
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import {StyledTop} from "../styledComponents/styledComponents";
import styled, { keyframes }  from 'styled-components';
import { fadeIn } from 'react-animations';

const MapOuterContainer = styled.section`
  padding: 1em 5vw;
  color: black;
  font-size: 0.7em;
  text-align: left;
  display: grid;
  grid-template-columns: 5fr 1.5fr ;
`
 
const fadeAnimation = keyframes`${fadeIn}`;
 
const MapFadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;



class Contact extends Component {
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <h1>CONTACT</h1>
        </StyledTop>
        <MapOuterContainer>
        <MapFadeDiv>
          <Map center={["53.521361", "-1.13241"]} zoom={6}>
                {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url="https://api.mapbox.com/styles/v1/alexandertrout/ck67r24b90aoe1iomt2f9v8n5/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGFuZGVydHJvdXQiLCJhIjoiY2s2NndtcHFjMDJkZzNqbXFmN2Q1bzgyayJ9.zFETMUE1SAKmZy0Zje6a7g" />
                <Marker position={["53.521361", "-1.13241"]}>
                  <Popup>Current Location: Doncaster</Popup>
                </Marker>
              </Map>
        </MapFadeDiv>
        <p>
          Phone: 07516158756 <br></br>
          Email: alexandertrout96@gmail.com <br></br>
          Please find links to my socials below!
        </p>
        </MapOuterContainer>
      </div>

    );
  }
}

export default Contact;