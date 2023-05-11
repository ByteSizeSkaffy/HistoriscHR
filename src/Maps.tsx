import React from 'react';
import {useState,useRef,useEffect} from 'react';
import Marker from './ImageMarker';
import "./maps.css";
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
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  function handleImgLoad(event:any) {
    const img = event.target;
    const { width, height } = img;
    setImgSize({ width, height });
  }
  

  const source=[WTH_4029,WTH_4100_1899,WTH_4100_1940,RED,GRN,BLU]
  const og = [WTH_4029,WTH_4100_1899,WTH_4100_1940]

  const fix = ()=> {setClicked((clicked)=>!clicked); setVisibility(!isvisible)}
  return (
    <div className="map">
      <img className={clicked? "fixed"+imageclassname  : imageclassname } onClick={(event)=>{fix();handleImgLoad(event)}} src={imagePath} alt={imagePath}/>
      <Marker className={clicked? "Two "+"Marker intro":"Two "+"hiddenMarker"} source={source} visible={isvisible} x={"73%"} y={"47%"} size={imgSize}/>
      <Marker className={clicked? "One "+"Marker intro":"One "+"hiddenMarker"} source={og} visible={isvisible} x={"0%"} y={"40%"} size={imgSize}/>

      <div className={clicked? "fixed"+titleclassname : titleclassname  }>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};