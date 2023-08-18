import React, {useState, useRef} from 'react';
import Map from './Maps';
import image1 from './images/Pictures/2023.jpg';

import './app.css';

function Frontend_New(){
  return(
  <div className='bg'>

  </div>
  )
}

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