import React from 'react';
import {useState,useRef,useEffect} from 'react';
import Marker from './ImageMarker';
import {
  WTH_4029, WTH_4100_1940,WTH_4100_1899,RED,GRN,BLU
} from "./images/Pictures"

type MapProps ={
  imageclassname: string;
  titleclassname: string;
  imagePath: string;
  year: number;	
}

const Map: React.FC<MapProps> = ({imageclassname, titleclassname, imagePath, year}) => {
  const [clicked, setClicked] = useState(false);
  const [isvisible, setVisibility] = useState(false);

  const source=[WTH_4029,WTH_4100_1899,WTH_4100_1940,RED,GRN,BLU]
  const og = [WTH_4029,WTH_4100_1899,WTH_4100_1940]

  const fix = ()=> {setClicked((clicked)=>!clicked); setVisibility(!isvisible)}
  return (
    <div className="map">
      <img className={clicked? "fixed"+imageclassname  : imageclassname } onClick={fix} src={imagePath} alt={imagePath} />
      <Marker className={clicked? "Two "+"Marker intro":"Two "+"hiddenMarker"} source={source} visible={isvisible} leftProp={"50%"} heightProp={"50%"}/>
      <Marker className={clicked? "One "+"Marker intro":"One "+"hiddenMarker"} source={og} visible={isvisible} leftProp={"20%"} heightProp={"40%"}/>

      <div className={clicked? "fixed"+titleclassname : titleclassname  }>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};