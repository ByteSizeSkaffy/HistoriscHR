import React, {useState, useRef} from 'react';
import Map from './Maps';
import image1 from './images/maps/1936.jpg';
import image2 from './images/maps/1920.jpg';
import image3 from './images/maps/1903.jpg';
import './app.css';

function Frontend(){
    return (
  <div className="App">
      <div className="mapgridbackground">
      <div className="mapgrid3">
        <div className="mapgrid2">
        <div className="mapgrid">

        <Map imageclassname={"firstmap"} titleclassname={"maptitle"} imagePath={image1} year={1936}></Map>
        </div>

        <Map imageclassname={"middlemap"} titleclassname={"maptitle2"} imagePath={image2} year={1920}></Map>
        </div>

        <Map imageclassname={"lastmap"} titleclassname={"maptitle3"} imagePath={image3} year={1903}></Map>
        </div>
      </div>
    </div>

  )
} 
export default Frontend