import React from 'react';
import {useState,useRef,useEffect} from 'react';
import Marker from './ImageMarker';
import {data} from "./images/Pictures/FileData"
import { Markers } from './MarkerInfo';
import "./Frontend.css"

type MapProps ={
  imageclassname: string;
  titleclassname: string;
  imagePath: string;
  year: string;	
}

const Map: React.FC<MapProps> = ({imageclassname, titleclassname, imagePath, year}) => {
  const [clicked, setClicked] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  function handleImgLoad(event:any) {
    const img = event.target;
    const { width, height } = img;
    setImgSize({ width, height });
  }

  

  function MarkerRender(){
    var markList:JSX.Element[]=[]
    Markers.forEach(marker => {
      markList.push(<Marker className={clicked? "Marker intro":"Hidden Marker"} source={marker.source} x={marker.x} y={marker.y} size={imgSize} model={marker.model}/>)
    });
    return markList
  }

  const fix = ()=> {setClicked((clicked)=>!clicked);}
  return (
    <div>
      <div className={!clicked? "closed "+'mapContainer':"mapContainer"}>
      <img className={imageclassname } onClick={(event)=>{fix();handleImgLoad(event)}} src={imagePath} alt={imagePath}/>
      </div>
      
      {MarkerRender()}

      <div className={!clicked? "closed "+titleclassname : titleclassname  }>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};