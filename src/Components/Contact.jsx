import React, { Component } from 'react';
import Menubar from "./Menu"
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import {StyledTop, OuterContainer} from "../styledComponents/styledComponents";
import styled from 'styled-components';

const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
` 

class Contact extends Component {
  render() {
    return (
      <div>
          <Menubar/>
        <StyledTop>
          <h1>CONTACT</h1>
        </StyledTop>
        <OuterContainer>
        <MapContainer>
          <Map center={["53.521361", "-1.13241"]} zoom={6}>
                {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url="https://api.mapbox.com/styles/v1/alexandertrout/ck67r24b90aoe1iomt2f9v8n5/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGFuZGVydHJvdXQiLCJhIjoiY2s2NndtcHFjMDJkZzNqbXFmN2Q1bzgyayJ9.zFETMUE1SAKmZy0Zje6a7g" />
                <Marker position={["53.521361", "-1.13241"]}>
                  <Popup>Current Location: Doncaster</Popup>
                </Marker>
              </Map>
        </MapContainer>
        </OuterContainer>
      </div>

    );
  }
}

export default Contact;