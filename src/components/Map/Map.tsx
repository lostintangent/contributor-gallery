/* global Microsoft */

import React, { Component } from "react";
import styled from "styled-components";

const credentials =
  "Aoj1fy4YAzycGalaBO78mle0i7ugx4q46SwWrMPCQYsKbVQ1-Ubq6Q17xlrxM-1W";

interface Pin {
  location: string;
  signatureCount: number;
  latitude: number;
  longitude: number;
}

interface MapProps {
  pins: Pin[];
}

export default class Map extends Component<MapProps> {
  componentDidMount() {
    // The Bing map control requires a global JS function that it
    // can trigger in order to initialize once the script is downloaded.
    window.loadMap = this.loadMap.bind(this, this.props.pins);

    const script = document.createElement("script");
    script.src = `https://www.bing.com/api/maps/mapcontrol?callback=loadMap&key=${credentials}`;
    script.async = true;
    document.body.appendChild(script);
  }

  loadMap(pins: Pin[]) {
    const map = new Microsoft.Maps.Map("#guestbook-map", {
      credentials,
      animate: true,
      showDashboard: false,
      useInertia: false,
      enableSearchLogo: false,
      enableClickableLogo: false,
      zoom: 2,
    });

    pins.forEach(({ location, signatureCount, latitude, longitude }) => {
      const pinLocation = new Microsoft.Maps.Location(latitude, longitude);
      map.entities.push(
        new Microsoft.Maps.Pushpin(pinLocation, {
          title: location,
          text: signatureCount.toString(),
        })
      );
    });
  }

  render() {
    return <Container id="guestbook-map" />;
  }
}

const Container = styled.div`
  border: ${({ theme: { borderStyle } }) => borderStyle};
  height: 400px;
  position: relative;
  width: 900px;
`;
