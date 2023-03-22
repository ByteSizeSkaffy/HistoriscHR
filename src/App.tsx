import React,  {useState} from 'react';
import image1 from './images/maps/1936.jpg';
import image2 from './images/maps/1920.jpg';
import image3 from './images/maps/1903.jpg';
import './app.css';

// map and title must be exported together since the animation relies on a naming shift of both
function Frontend() {
  const [map, setMap] = useState(false);
  const [map2, setMap2] = useState(false);
  const [map3, setMap3] = useState(false);
  if(map === true){
    return (
      <div className="App">
        <div className="mapgridbackground">
        <div className="mapgrid3">
          <div className="mapgrid2">
          <div className="mapgridfixed">
  
          <img className="firstmapclicked" src={image1} onClick ={()=>setMap(!map)} alt="loading...." />
          <div className='fixedmaptitle1'> 1936</div>
          
          </div>
          <img className="middlemap" src={image2} onClick ={()=>setMap2(!map2)} alt="loading...." />
        <div className='maptitle2'> 1920</div>
        </div>

        <img className="lastmap" src={image3} onClick ={()=>setMap3(!map3)}alt="loading...." />
        <div className='maptitle'> 1903</div>
  
        </div>
      </div>
    </div>
    );
  }
  else if(map2 === true){
    return(    <div className="App">
    <div className="mapgridbackground">
    <div className="mapgrid3">
      <div className="fixedmapgrid2">
      <div className="mapgrid">

      <img className="firstmap" src={image1} onClick ={()=>setMap(!map)} alt="loading...." />
      <div className='maptitle'> 1936</div>
      </div>

      <img className="fixedmiddlemap" src={image2} onClick ={()=>setMap2(!map2)} alt="loading...." />
      <div className='fixedmaptitle2'> 1920</div>
      </div>

      <img className="lastmap" src={image3} onClick ={()=>setMap3(!map3)}alt="loading...." />
      <div className='maptitle'> 1903</div>
      </div>
    </div>
  </div>)
  }
  else{
  return (
    <div className="App">
      <div className="mapgridbackground">
      <div className="mapgrid3">
        <div className="mapgrid2">
        <div className="mapgrid">

        <img className="firstmap" src={image1} onClick ={()=>setMap(!map)} alt="loading...." />
        <div className='maptitle'> 1936</div>
        </div>

        <img className="middlemap" src={image2} onClick ={()=>setMap2(!map2)} alt="loading...." />
        <div className='maptitle2'> 1920</div>
        </div>

        <img className="lastmap" src={image3} onClick ={()=>setMap3(!map3)}alt="loading...." />
        <div className='maptitle'> 1903</div>
        </div>
      </div>
    </div>
    );
  }
}

export default Frontend;
