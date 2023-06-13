import React, {useState, useRef} from 'react';
import Map from './Maps';
import image1 from './images/Pictures/1899.jpg';
import image2 from './images/maps/1920.jpg';
import image3 from './images/maps/1903.jpg';
import './app.css';

function Frontend(){
    return (
  <div className="App">
      <div className="mapgridbackground">
        <div className="mapgrid">

        <Map imageclassname={"firstmap"} titleclassname={"maptitle"} imagePath={image1} year={"Kaart Rotterdam"}></Map>
        </div>
      </div>
    </div>

  )
} 
export default Frontend