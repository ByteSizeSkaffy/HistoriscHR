import React from 'react';
import {useState,useRef,useEffect} from 'react';
import Marker from './ImageMarker';
import "./maps.css";
import {data} from "./images/Pictures/FileData"

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


  const fix = ()=> {setClicked((clicked)=>!clicked);}
  return (
    <div className="map">
      <img className={clicked? "fixed"+imageclassname : imageclassname } onClick={(event)=>{fix();handleImgLoad(event)}} src={imagePath} alt={imagePath}/>
      <Marker className={clicked? "Marker intro":"Hidden Marker"} source={data.Maps} x={"50%"} y={"47%"} size={imgSize}/>
      <Marker className={clicked? "Marker intro":"Hidden Marker"} source={data.Wittehuis_Rotterdam} x={"72%"} y={"24%"} size={imgSize}/>
      <Marker className={clicked? "Marker intro":"Hidden Marker"} source={data.De_Hef} x={"55%"} y={"20%"} size={imgSize}/>

      <div className={clicked? "fixed"+titleclassname : titleclassname  }>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};