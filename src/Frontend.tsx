import React,  {useState, useRef} from 'react';
import image3 from './images/maps/1936.jpg';
import image2 from './images/maps/1920.jpg';
import image1 from './images/maps/1903.jpg';
import './app.css';

export function Frontend(){
  
  const [map, setMap] = useState(false);
  const [map2, setMap2] = useState(false);
  const [map3, setMap3] = useState(false);

  const Map1ref = useRef<HTMLImageElement>(null);
  const Map2ref = useRef<HTMLImageElement>(null);
  const Map3ref = useRef<HTMLImageElement>(null);
 
  const maptitle = useRef<HTMLDivElement>(null);
  const maptitle2 = useRef<HTMLDivElement>(null);
  const maptitle3 = useRef<HTMLDivElement>(null);

  const maptitles = [maptitle, maptitle2, maptitle3];
  
  const mapnames = ["firstmap", "middlemap", "lastmap"];
  const mapstate = [map, map2, map3];
  const mapref = [Map1ref, Map2ref, Map3ref];

  for(let i = 0; i < mapstate.length; i++){
      if(mapstate[i]){
          mapref[i].current?.classList.add("fixed" + mapnames[i].toString());
          maptitles[i].current?.classList.add("fixed" + maptitles[i].toString());
      }
  }
    return (
  <div className="App">
      <div className="mapgridbackground">
      <div className="mapgrid3">
        <div className="mapgrid2">
        <div className="mapgrid">

        <img className="firstmap" src={image1} onClick ={()=>setMap(!map)} alt="loading...." ref={Map1ref}/>
        <div className='maptitle' ref={maptitle}> 1936</div>
        </div>

        <img className="middlemap" src={image2} onClick ={()=>setMap2(!map2)} alt="loading...." ref={Map2ref} />
        <div className='maptitle2' ref={maptitle2}> 1920</div>
        </div>

        <img className="lastmap" src={image3} onClick ={()=>setMap3(!map3)}alt="loading...." ref={Map3ref}/>
        <div className='maptitle3' ref={maptitle3}> 1903</div>
        </div>
      </div>
    </div>

  )
} 
export default Frontend