import "./App.css";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import randomCoordinates from "random-coordinates";
import img from "./pin.svg";

const App = () => {
  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWpheXJlZGR5a29tbWVyYSIsImEiOiJja2wzcnhxbnMwN2RyMm9tdzlkeDJrMWF0In0.oR-KGSMQVDQE22ZtOMIFnQ";
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const zoom = 4;
  useEffect(() => {
    setInterval(() => {
      let cogen = [randomCoordinates()];
      let co_ordinates = cogen[0].split(",");
      setLat(Number(co_ordinates[0]));
      setLog(Number(co_ordinates[1]));
      console.log(co_ordinates);
    }, 10000);
  }, []);
  return (
    <>
      <ReactMapGL
        latitude={lat}
        longitude={log}
        width="95vw"
        height="95vh"
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        zoom={zoom}
      >
        <Marker key={Math.random() * 100000} latitude={lat} longitude={log}>
          <img src={img} alt="h" style={{ width: "50px" }} />
        </Marker>
      </ReactMapGL>
    </>
  );
};
export default App;
