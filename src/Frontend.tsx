import React, {useState, useRef} from 'react';
import Map from './Maps';
import image1 from './images/Pictures/2023.jpg';

import './app.css';
import './Frontend.css';

function Frontend(){
  return(
  <div className='bg'>
    <div className='YellowContainer'>
      <Map imageclassname='Map' titleclassname="title" imagePath={image1} year={"Kaart Rotterdam"}></Map>
    </div>
  </div>
  ) 
}

function Frontend_old(){
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