import React from 'react';
import {useState} from 'react';

type MapProps ={
  imageclassname: string;
  titleclassname: string;
  imagePath: string;
  year: number;	
}

const Map: React.FC<MapProps> = ({imageclassname, titleclassname, imagePath, year}) => {
  const [clicked, setClicked] = useState(false);

  const fix = ()=> setClicked((clicked)=>!clicked);
  return (
    <div className="map">
      <img className={clicked? "fixed"+imageclassname  : imageclassname } onClick={fix} src={imagePath} alt={imagePath} />
      <div className={clicked? "fixed"+titleclassname : titleclassname  }>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};