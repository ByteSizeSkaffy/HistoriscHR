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
type MyState = {
  Markers:{ name: string; source: { path: any; year: string; }[]; x: string; y: string; model: string; }[]
 };

class stateContainer extends React.Component<MyState>{
  static state: MyState = {
      Markers: [
        {"name":"WitteHuis_Rotterdam",
        "source":[
            {"path":require("./images/Pictures/WTH_4100_1899.jpg"),"year":"1899"},
            {"path":require("./images/Pictures/WTH_4029.jpg"),"year":"1912"},
            {"path":require("./images/Pictures/WTH_4100_1940.jpg"),"year":"1940"},
            {"path":require("./images/Pictures/WTH_now.jpg"),"year":"2023"}
            ],
        "x":"45.5%",
        "y":"33%",
        "model":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"},
      {"name":"De_hef",
        "source":[
          {"path":require("./images/Pictures/Hef_1928.jpg"),"year":"1928"},
          {"path":require("./images/Pictures/Hef_1978.jpg"),"year":"1978"},
          {"path":require("./images/Pictures/de-hef.jpeg"),"year":"2023"}
        ],
        "x":"52%",
        "y":"45%",
        "model":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"
        },
        {"name":"Stadhuis_Oud",
        "source":[
            {"path":require("./images/Pictures/Stadh_Oud_1607.jpg"),"year":"1607"},
            {"path":require("./images/Pictures/Stadh_Oud_1782.jpg"),"year":"1782"},
            {"path":require("./images/Pictures/Stadh_Oud_1867.jpg"),"year":"1867"}
        ],
        "x":"45%",
        "y":"22%",
        "model":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"}]
    };
    static setDataState(mar:{ name: string; source: { path: string; year: string; }[]; x: string; y: string; model: string; }[]){
      this.state={Markers:mar}
    }
}
  

export function setDataStateEx(mar: { name: string; source: { path: string; year: string; }[]; x: string; y: string; model: string; }[]){
  stateContainer.setDataState(mar)
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
    if(stateContainer.state!=null){
    stateContainer.state.Markers.forEach(marker => {
      markList.push(<Marker className={clicked? "Marker intro":"Hidden Marker"} source={marker.source} x={marker.x} y={marker.y} size={imgSize} model={marker.model} name={marker.name}/>)
    });
    return markList
    }
  }

  const fix = ()=> {setClicked((clicked)=>!clicked);}
  return (
    <div>
      <div className={!clicked? "closed "+'mapContainer':"mapContainer"}>
      <img className={imageclassname } onClick={(event)=>{fix();handleImgLoad(event)}} src={imagePath} alt={imagePath}/>
      </div>
      
      {MarkerRender()}

      <div className={!clicked? "closedtitle " : titleclassname}>{year}</div>
    </div>
  )
}
export default Map;
export type {MapProps};