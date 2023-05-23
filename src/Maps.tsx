import React from 'react';
import {useState,useRef,useEffect} from 'react';
import Marker from './ImageMarker';
import "./maps.css";
import {data} from "./images/Pictures/FileData"

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
  const source:Array<Object>=data.Dispenser
  const og:Array<Object> =data.Wittehuis_Rotterdam


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