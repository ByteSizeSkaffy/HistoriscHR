import React from 'react';
import {useState,useRef,useEffect} from 'react';
import Marker from './ImageMarker';
import Old from "./images/GRNdispenser.png";
import blu from "./images/Bludispenser.png";
import Red from "./images/dispenser.png";

type MapProps ={
  imageclassname: string;
  titleclassname: string;
  imagePath: string;
  year: number;	
}

const Map: React.FC<MapProps> = ({imageclassname, titleclassname, imagePath, year}) => {
  const [clicked, setClicked] = useState(false);
  const [isvisible, setVisibility] = useState(false);


  const fix = ()=> {setClicked((clicked)=>!clicked); setVisibility(!isvisible)}
  return (
    <div className="map">
      <img className={clicked? "fixed"+imageclassname  : imageclassname } onClick={fix} src={imagePath} alt={imagePath} />
      <Marker className={clicked? "Two "+"Marker":"Two "+"hiddenMarker"} ImageOld={Old} ImageMiddle={blu} ImageNew={Red} visible={isvisible} leftProp={"50%"} heightProp={"50%"}/>
      <Marker className={clicked? "One "+"Marker":"One "+"hiddenMarker"} ImageOld={Old} ImageMiddle={blu} ImageNew={Red} visible={isvisible} leftProp={"20%"} heightProp={"40%"}/>

      <div className={clicked? "fixed"+titleclassname : titleclassname  }>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};