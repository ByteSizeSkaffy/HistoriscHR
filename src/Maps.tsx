import React from 'react';
import {useState,useRef,useEffect} from 'react';
import Marker from './ImageMarker';
import Old from "./images/Pictures/WTH_4029.jpg";
import blu from "./images/Pictures/WTH_4100_1899.jpg";
import Red from "./images/Pictures/WTH_4100_1940.jpg";

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
      <Marker className={clicked? "Two "+"Marker intro":"Two "+"hiddenMarker"} ImageOld={Old} ImageMiddle={blu} ImageNew={Red} visible={isvisible} leftProp={"50%"} heightProp={"50%"}/>
      <Marker className={clicked? "One "+"Marker intro":"One "+"hiddenMarker"} ImageOld={Old} ImageMiddle={blu} ImageNew={Red} visible={isvisible} leftProp={"20%"} heightProp={"40%"}/>

      <div className={clicked? "fixed"+titleclassname : titleclassname  }>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};